import React from "react";

const About = () => {
  return (
    <div className="px-10 py-10 w-full h-96 flex items-center justify-center relative overflow-hidden">
       <img
        src="/sprinkles.png"
        alt="sprinkles"
        className="absolute -top-1/2 left-0 w-[40%]  object-cover"
      />
      <div className="flex flex-col items-center justify-center gap-10 z-10">
        <h1 className="text-5xl font-bold text-[#fd85b2]">About Us – Crafting Chocolate, Your Way!</h1>
        <p className="font-bold text-4xl leading-16  text-center  text-[#5a3956]">
          At ChocoCrafter, we turn your chocolate dreams into reality with fully
          customizable flavors, fillings, and designs. Create your perfect
          treat, crafted just for you!
        </p>
      </div>
    </div>
  );
};

export default About;
