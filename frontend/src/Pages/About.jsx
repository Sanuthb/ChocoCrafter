import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="h-screen w-full">
      <div className="bg-[#fd85b2] w-full h-[30vh] flex items-center justify-center flex-col gap-2">
        <h1 className="text-center text-4xl text-white font-extrabold">About</h1>
        <p className="text-center text-lg text-white font-normal">
          <Link to="/">Home</Link> / About
        </p>
      </div>
      <div className="w-full flex items-center  justify-center gap-10 flex-col p-20">
        <h1 className="text-5xl font-bold text-[#946f8c]">Kick Start Your Celebration Mode</h1>
        <p className="text-2xl leading-16 text-center font-bold ">
          "Calling all chocolate lovers! 🍫✨ Dive into the rich, creamy, and
          oh-so-delicious chocolate ice cream treat! One scoop is never
          enough—grab your favorite cup, cone, or popsicle and satisfy your
          sweet cravings! 🍦❤️ #ChocoLove #YummyDelights"
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
