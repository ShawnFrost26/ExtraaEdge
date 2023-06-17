import React from "react";
import { Modal, Form, Input } from "antd";

const UserModal = ({ open, onCancel, onOk, user }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Basic Modal"
      open={open}
      onCancel={onCancel}
      onOk={handleOk}
      destroyOnClose
    >
      <Form form={form} initialValues={user}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "This field is required" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            { required: true, message: "This field is required" },
            { type: "phone", message: "Invalid phone number" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[
            { required: true, message: "This field is required" },
            { type: "website", message: "Invalid website" },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
