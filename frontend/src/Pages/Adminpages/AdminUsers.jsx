import React, { useEffect, useState } from "react";
import { Table, Button, Popconfirm, message, Spin } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import AdminSidebar from "../../Components/AdminSidebar";
import { useSelector } from "react-redux";

const AdminUsers = () => {
  const { token } = useSelector((state) => state.auth); // Get token from Redux
  const [messageApi, contextHolder] = message.useMessage();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      messageApi.open({
        type: 'error',
        content: 'Failed to fetch users',
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/admin/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete user");
      messageApi.open({
        type: 'success',
        content: 'User deleted successfully',
      });
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      messageApi.open({
        type: 'error',
        content: 'Failed to delete users',
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            role === "admin"
              ? "bg-blue-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {role}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this user?"
          onConfirm={() => deleteUser(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex">
      {contextHolder}
      <AdminSidebar />
      <div className="flex-1 p-6 bg-[#f4f6f8]">
        <h1 className="text-2xl font-bold mb-4 text-[#2c3e50]">Manage Users</h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={users}
            rowKey="_id"
            pagination={{ pageSize: 8 }}
            bordered
          />
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
