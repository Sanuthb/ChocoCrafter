import React from "react";

const Menu = () => {
  return (
    <div className="bg-[#fd85b2]  w-full px-10 flex flex-col gap-20 relative">
        <img src="/cocoballs.png" alt="cocoballs" className="absolute right-0 -top-40"/>
        <img src="/sprinkles.png" alt="cocoballs" className="absolute w-full h-1/2 right-0 bottom-0 object-cover"/>
      <div className="mt-10">
        <h1 className="text-4xl text-white font-extrabold">
          Your Perfect Chocolate: A Custom Creation Guide
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center z-10 mb-10">
        <div
          className="bg-white w-72 h-52 flex flex-col items-center justify-center text-amber-950 p-1"
          style={{ borderRadius: "46% 19% 47% 22% / 29% 32% 48% 42% " }}
        >
          <span className="bg-amber-950 text-white rounded-full px-3 py-3 text-xl font-bold">
            1
          </span>
          <h1 className="text-2xl font-bold text-center">
            Choosing Your Chocolate Base
          </h1>
        </div>
        <div
          className="bg-white w-72 h-52 flex flex-col items-center justify-center text-amber-950 p-1"
          style={{ borderRadius: "17% 64% 22% 68% / 34% 16% 67% 26%  " }}
        >
          <span className="bg-amber-950 text-white rounded-full px-3 py-3 text-xl font-bold">
            2
          </span>
          <h1 className="text-2xl font-bold text-center">
            Selecting Flavor Enhancements
          </h1>
        </div>
        <div
          className="bg-white w-72 h-52 flex flex-col items-center justify-center text-amber-950 p-1"
          style={{ borderRadius: "46% 19% 47% 22% / 29% 32% 48% 42% " }}
        >
          <span className="bg-amber-950 text-white rounded-full px-3 py-3 text-xl font-bold">
            3
          </span>
          <h1 className="text-2xl font-bold text-center">
            Picking Your Fillings
          </h1>
        </div>
        <div
          className="bg-white w-72 h-52 flex flex-col items-center justify-center text-amber-950 p-1"
          style={{ borderRadius: "17% 64% 22% 68% / 34% 16% 67% 26%  " }}
        >
          <span className="bg-amber-950 text-white rounded-full px-3 py-3 text-xl font-bold">
            4
          </span>
          <h1 className="text-2xl font-bold text-center">Adding Toppings</h1>
        </div>
        <div
          className="bg-white w-72 h-52 flex flex-col items-center justify-center text-amber-950 p-1"
          style={{ borderRadius: "46% 19% 47% 22% / 29% 32% 48% 42% " }}
        >
          <span className="bg-amber-950 text-white rounded-full px-3 py-3 text-xl font-bold">
            5
          </span>
          <h1 className="text-2xl font-bold text-center">
            Choosing Shape and Personalization
          </h1>
        </div>
        <div
          className="bg-white w-72 h-52 flex flex-col items-center justify-center text-amber-950 p-1"
          style={{ borderRadius: "17% 64% 22% 68% / 34% 16% 67% 26%  " }}
        >
          <span className="bg-amber-950 text-white rounded-full px-3 py-3 text-xl font-bold">
            6
          </span>
          <h1 className="text-2xl font-bold text-center">Place Order</h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
