import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SpreadJoy = () => {
  const { token } = useSelector((state) => state.auth);
  const [link, setlink] = useState("/shop");
  useEffect(() => {
    if (!token) {
      setlink("/login");
    }
  }, []);
  return (
    <div className="w-full h-[70vh] text-center flex items-center justify-center px-10">
      <div className="h-full w-1/2 flex flex-col items-center justify-center gap-10">
        <h1 className="text-3xl font-extrabold text-[#fd85b2]">
          Spreading Happiness, One Chocolate Creation at a Time.
        </h1>
        <p className="text-[#5a3956] text-2xl font-semibold">
          Chocolate is pure delight, a simple pleasure that sparks joy. We craft
          each piece with care, inviting you to create your perfect treat.
          Sharing happiness, one delicious bite at a time.
        </p>
        <Link to={link}>
          <Button
          type="primary"
            style={{
              background: "#fd85b2",
              padding: "1rem",
              color: "white",
              fontSize: "1rem",
            }}
          >
            <ShoppingCartOutlined /> Order Now
          </Button>
        </Link>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          className="w-96 object-cover"
          src="/spreadjoy.png"
          alt="Chocolate hero"
        />
      </div>
    </div>
  );
};

export default SpreadJoy;
