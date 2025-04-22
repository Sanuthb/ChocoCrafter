import { Button, Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/Slice/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const onFinish = async (values) => {
    try {
      const response = await fetch("https://chococrafter.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data.user);
      if (!response.ok) throw new Error(data.message);

      dispatch(setUser({ token: data.token, user: data.user }));
      messageApi.open({
        type: "success",
        content: "Login successful!",
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error.message || "Login failed!",
      });
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#fd85b2] to-[#ffa9c9]">
      {contextHolder}
      <div className="bg-white p-10 rounded-xl shadow-lg text-black flex flex-col gap-6 w-[400px]">
        <h1 className="font-bold text-3xl text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center">Sign in to your account</p>

        <Form
          name="login-form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          className="w-full"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" className="rounded-lg h-10" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password className="rounded-lg h-10" />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              className="w-full bg-[#fd85b2] hover:bg-[#fd85b2] text-white font-medium rounded-lg h-10"
              style={{ background: "#fd85b2", color: "white" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <p className="text-gray-600 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#fd85b2] font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
