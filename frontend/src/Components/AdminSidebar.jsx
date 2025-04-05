import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Slice/authSlice'; // adjust if your slice path is different

const AdminSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // or your login route
  };

  return (
    <div className="w-64 bg-[#2c3e50] text-white p-6 flex flex-col justify-between min-h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <div className="flex flex-col space-y-3">
          <Link to="/admin" className="hover:text-[#1abc9c]">Dashboard</Link>
          <Link to="/adminusers" className="hover:text-[#1abc9c]">Users</Link>
          <Link to="/adminorders" className="hover:text-[#1abc9c]">Orders</Link>
          <Link to="/adminpayment" className="hover:text-[#1abc9c]">Payment</Link>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-[#e74c3c] hover:bg-[#c0392b] rounded text-white font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
