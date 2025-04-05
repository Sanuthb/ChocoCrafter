import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart"
import PaymentForm from "./Pages/PaymentForm";
import Admin from "./Pages/Admin";
import { useSelector } from "react-redux";
import AdminOrders from "./Pages/Adminpages/AdminOrders";
import AdminUsers from "./Pages/Adminpages/AdminUsers";
import AdminPayment from "./Pages/Adminpages/AdminPayment";


const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
        <Routes>
          <Route path="/"  element={
          user?.role === "admin" ? (
            <Navigate to="/admin" replace />
          ) : (
            <Home />
          )
        } />
          <Route path="/about" element={<About/>}/>
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user-dashboard" element={<Dashboard/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/payment" element={<PaymentForm/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/adminorders" element={<AdminOrders/>}/>
          <Route path="/adminusers" element={<AdminUsers/>}/>
          <Route path="/adminpayment" element={<AdminPayment/>}/>
        </Routes>
    </>
  );
};

export default App;
