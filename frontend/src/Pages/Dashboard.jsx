import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Slice/authSlice";
import { Button, Card, Avatar, Spin, message, Empty } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { url } from "../utils/url";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${url}/api/v1/order/user/${user._id}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch orders");
      setOrders(data);
    } catch (err) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?._id) fetchOrders();
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center">
        {/* Banner */}
        <div className="bg-[#fd85b2] w-full h-[30vh] flex items-center justify-center flex-col gap-2">
          <h1 className="text-center text-4xl text-white font-extrabold">My Account</h1>
          <p className="text-center text-lg text-white font-normal">
            <Link to="/">Home</Link> / My Account
          </p>
        </div>

        {!token ? (
          <Empty description="Login please..." />
        ) : (
          <div className="flex flex-col lg:flex-row items-start justify-between w-full px-6 lg:px-20 py-10 gap-10">
            {/* Profile Card */}
            <Card
              style={{ width: 400 }}
              className="shadow-xl rounded-xl"
              actions={[
                <Button
                  danger
                  icon={<LogoutOutlined />}
                  onClick={handleLogout}
                  key="logout"
                >
                  Logout
                </Button>,
              ]}
            >
              <div className="flex flex-col items-center text-center">
                <Avatar size={80} icon={<UserOutlined />} />
                <h2 className="mt-4 text-xl font-semibold">{user?.name}</h2>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </Card>

            {/* Orders Section */}
            <div className="w-full max-w-2xl">
              <Card className="shadow-xl rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#333]">Your Orders</h3>

                {loading ? (
                  <div className="flex justify-center py-10">
                    <Spin size="large" />
                  </div>
                ) : orders.length === 0 ? (
                  <p className="text-gray-500">No orders yet.</p>
                ) : (
                  <div className="max-h-[500px] overflow-y-auto pr-2">
                    {orders.map((order) => (
                      <Card
                        key={order._id}
                        className="mb-4 border border-gray-200 shadow-sm rounded-lg"
                      >
                        <p><strong>Order ID:</strong> {order._id}</p>
                        <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p><strong>Total Items:</strong> {order.chocolates.length}</p>
                        <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
                        <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
                        <p><strong>Order Status:</strong> {order.orderStatus}</p>

                        <ul className="mt-2 ml-4 list-disc text-gray-700">
                          {order.chocolates.map((choco, idx) => (
                            <li key={idx}>
                              <strong>Flavor:</strong> {choco.flavorInfusion},&nbsp;
                              <strong>Fillings:</strong> {choco.fillings?.join(", ") || "None"},&nbsp;
                              <strong>Toppings:</strong> {choco.toppings?.join(", ") || "None"}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
