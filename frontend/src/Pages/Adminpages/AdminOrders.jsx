import React, { useEffect, useState } from "react";
import { Table, Select, message, Spin } from "antd";
import AdminSidebar from "../../Components/AdminSidebar";
import { useSelector } from "react-redux";

const { Option } = Select;

const AdminOrders = () => {
  const { token } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/admin/orders");

      if (!res.ok) throw new Error("Failed to fetch orders");

      const data = await res.json();
      console.log(data)
      setOrders(data);
    } catch (err) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    fetchOrders()
  },[])
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/admin/updateorder/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!res.ok) throw new Error("Failed to update order status");

      message.success("Order status updated");
      fetchOrders(); // Refresh list
    } catch (err) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "User",
      dataIndex: "userId",
      key: "userId",
      render: (userId) => userId?.name || "N/A",
    },
    {
      title: "Email",
      dataIndex: "userId",
      key: "userEmail",
      render: (userId) => userId?.email || "N/A",
    },
    {
      title: "Chocolates",
      dataIndex: "chocolates",
      key: "chocolates",
      render: (chocolates) =>
        chocolates.map((choc, index) => (
          <div key={index} className="mb-2">
            <p><strong>Name:</strong> {choc.name}</p>
            <p><strong>Ingredients:</strong> {choc.ingredients.join(", ")}</p>
            <p><strong>Quantity:</strong> {choc.quantity}</p>
            <hr />
          </div>
        )),
    },
    {
      title: "Total (₹)",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Payment",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            status === "Paid"
              ? "bg-green-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (status, record) => (
        <Select
          value={status}
          onChange={(value) => updateOrderStatus(record._id, value)}
          style={{ width: 130 }}
        >
          <Option value="Pending">Pending</Option>
          <Option value="Processing">Processing</Option>
          <Option value="Shipped">Shipped</Option>
          <Option value="Delivered">Delivered</Option>
          <Option value="Cancelled">Cancelled</Option>
        </Select>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-[#f4f6f8]">
        <h1 className="text-2xl font-bold mb-4 text-[#2c3e50]">Manage Orders</h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={orders}
            rowKey="_id"
            pagination={{ pageSize: 8 }}
            bordered
          />
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
