import React, { useEffect, useState } from "react";
import { Card, message, Spin } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import AdminSidebar from "../Components/AdminSidebar";

const Admin = () => {
  const { token } = useSelector((state) => state.auth);

  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdminData = async () => {
    try {
      const [usersRes, ordersRes] = await Promise.all([
        fetch("http://localhost:3000/api/v1/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("http://localhost:3000/api/v1/admin/orders", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (!usersRes.ok || !ordersRes.ok) {
        throw new Error("Failed to fetch admin data");
      }

      const usersData = await usersRes.json();
      const ordersData = await ordersRes.json();

      setUsers(usersData);
      setOrders(ordersData);
    } catch (err) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const totalSales = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const recentOrders = orders.slice(0, 5).map((order) => ({
    id: order._id,
    user: order.userId?.name || "Unknown",
    total: order.totalAmount,
    status: order.orderStatus,
  }));

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
        <AdminSidebar/>
      {/* Main content */}
      <div className="flex-1 p-10 bg-[#ecf0f1]">
        <h1 className="text-3xl font-bold mb-6 text-[#2c3e50]">
          Welcome, Admin
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-md">
                <div className="flex items-center gap-4">
                  <UserOutlined className="text-2xl text-blue-500" />
                  <div>
                    <p className="text-gray-500">Total Users</p>
                    <h3 className="text-xl font-bold">{users.length}</h3>
                  </div>
                </div>
              </Card>
              <Card className="shadow-md">
                <div className="flex items-center gap-4">
                  <ShoppingCartOutlined className="text-2xl text-green-500" />
                  <div>
                    <p className="text-gray-500">Total Orders</p>
                    <h3 className="text-xl font-bold">{orders.length}</h3>
                  </div>
                </div>
              </Card>
              <Card className="shadow-md">
                <div className="flex items-center gap-4">
                  <DollarOutlined className="text-2xl text-orange-500" />
                  <div>
                    <p className="text-gray-500">Total Sales</p>
                    <h3 className="text-xl font-bold">₹{totalSales}</h3>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
              <div className="max-h-60 overflow-y-auto">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex justify-between items-center border-b py-2 text-sm"
                  >
                    <span className="font-medium">{order.id.slice(-6)}</span>
                    <span>{order.user}</span>
                    <span>₹{order.total}</span>
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${
                        order.status === "Delivered"
                          ? "bg-green-500"
                          : order.status === "Pending"
                          ? "bg-yellow-500"
                          : order.status === "Cancelled"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
