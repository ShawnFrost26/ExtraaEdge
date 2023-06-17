import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import LoadingIcon from "./LoadingIcon";

import "./UserList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user.id === parseInt(updatedUser.id) ? updatedUser : user
      );
      return updatedUsers;
    });
  };    

  return (
    <div className="users-list">
      {loading ? (
        <div className="loading-icon"><LoadingIcon /></div>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDeleteUser}
            onUpdate={handleUpdateUser}
          />
        ))
      )}
    </div>
  );
};

export default UsersList;
