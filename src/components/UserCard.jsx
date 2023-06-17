import React, { useState } from "react";
import { Avatar, Button, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import "./UserCard.css";
import UserModal from "./UserModal";

const UserCard = ({ user, onDelete, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [avatarUrl] = useState(
    `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`
  );

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = (updatedUser) => {
    const updatedUserWithId = { ...updatedUser, id: user.id };
    onUpdate(updatedUserWithId);
    setIsModalOpen(false);
  };

  return (
    <div className="user-card">
      <div className="avatar">
        <Avatar
          style={{ borderRadius: 0 }}
          size={130}
          src={avatarUrl}
        />
      </div>
      <div className="info">
        <Typography.Title
          level={5}
          className="name"
          style={{ marginTop: "0px" }}
        >
          {user.name}
        </Typography.Title>
        <Typography.Text className="text">
          <MailOutlined /> {user.email}
        </Typography.Text>
        <Typography.Text className="text">
          <PhoneOutlined /> {user.phone}
        </Typography.Text>
        <Typography.Text className="text">
          <GlobalOutlined />{" "}
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {user.website}
          </a>
        </Typography.Text>
      </div>
      <div className="actions">
        <Button
          className="like-button"
          icon={liked ? <HeartFilled /> : <HeartOutlined />}
          onClick={handleLike}
        />
        <Button
          className="edit-button"
          icon={<EditOutlined />}
          onClick={handleEdit}
        />
        <Button
          className="delete-button"
          icon={<DeleteFilled />}
          onClick={handleDelete}
        />
      </div>
      <UserModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        user={user}
      />
    </div>
  );
};

export default UserCard;
