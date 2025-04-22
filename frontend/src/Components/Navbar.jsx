import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useSelector } from "react-redux";
import { selectCart } from "../Redux/Slice/orderSlice";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const cart = useSelector(selectCart)
  return (
    <div className="bg-[#fd85b2] px-2 py-4 flex items-center justify-center w-full">
      <div className="bg-white px-3 py-3 rounded-xl flex items-center justify-between w-[75%]">
        <div className="flex gap-5">
          <Link
            className="text-black font-semibold hover:font-bold cursor-pointer transition-all"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-black font-semibold hover:font-bold cursor-pointer transition-all"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-black font-semibold hover:font-bold cursor-pointer transition-all"
            to={token?"/shop":"/login"}
          >
            Shop
          </Link>
          <Link
            className="text-black font-semibold hover:font-bold cursor-pointer transition-all"
            to={token?"/user-dashboard":"/login"}
          >
            Orders
          </Link>
        </div>
        <div>
          <Link to="/">
            <span
              style={{ fontSize: "22px", fontWeight: "bold", color: "#fd85b2" }}
            >
              ChocoCrafter
            </span>
          </Link>
        </div>
        <div>
          {token ? (
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Link to="/user-dashboard">
                <UserOutlined style={{ fontSize: "20px", color: "black" }} />
              </Link>
              <Link to="/cart">
                <Badge style={{}} count={cart.length}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "20px", color: "black" }}
                  />
                </Badge>
              </Link>
              <Button
                type="primary"
                shape="round"
                size="large"
                style={{ background: "#fd85b2" }}
              >
                Order Now
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button
                type="primary"
                shape="round"
                size="large"
                style={{ background: "#fd85b2" }}
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
