import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/Slice/authSlice";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/url";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    try {
      const res = await fetch(`${url}/api/v1/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      dispatch(setUser({ token: data.token, user: data.user }));
      messageApi.open({
        type: "success",
        content: "User registerd successful!",
      });
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "Invalid user details",
      });
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#fd85b2] to-[#f798bb]">
      {contextHolder}
      <div className="bg-white p-10 rounded-lg shadow-lg text-black w-[500px]">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              style={{ background: "#fd85b2", color: "white" }}
              block
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
