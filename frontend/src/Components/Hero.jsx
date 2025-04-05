import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const {token} = useSelector(state=>state.auth)
  const [link,setlink]=useState("/shop")
  useEffect(()=>{
    if(!token){
      setlink("/login")
    }
  },[])
  return (
    <div
      className="h-[80vh] w-full bg-[#fd85b2] text-white flex items-center justify-between px-20 relative"
      style={{ borderRadius: "0% 0% 26% 36% / 0% 0% 19% 36% " }}
    >
      <img
        src="/cocobeans.png"
        alt="cocobeans"
        className="absolute top-0 left-0 w-32 object-cover"
      />
      <img
        src="/coco.png"
        alt="cocobeans"
        className="absolute top-0 right-0 w-40 object-cover"
      />
      <img
        src="/cocofruit.png"
        alt="cocobeans"
        className="absolute -bottom-10 left-0 w-40 object-cover"
      />
      <img
        src="/cocosplash.png"
        alt="cocobeans"
        className="absolute -bottom-10 right-0 w-40 object-cover"
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-semibold ">Create Your Own</h1>
        <h1 className="text-5xl font-semibold ">Chocolate, Your Way!</h1>
        <p className="text-justify ">
          Indulge in a world of personalized chocolates—choose your flavors,
          fillings, and toppings to craft the perfect treat. Whether it's a
          sweet gift or a delightful indulgence, your dream chocolate is just a
          few clicks away!
        </p>
        <Link to={link}>
          <Button type="primary" style={{ background:"white",color:"black",width: "fit-content" }}>
            <ShoppingCartOutlined />
            Shop Now
          </Button>
        </Link>
      </div>
      <div>
        <img className="w-[70rem]" src="/chocolate.png" alt="Chocolate hero" />
      </div>
    </div>
  );
};

export default Hero;
