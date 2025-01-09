import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex items-center justify-between font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={()=> navigate(-1)}
            className="w-8 p-2 bg-black rounded-full cursor-pointer"
            src={assets.arrow_left}
          />
          <img
            onClick={()=> navigate(1)}
            className="w-8 p-2 bg-black rounded-full cursor-pointer"
            src={assets.arrow_right}
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black py-1 px-4 rounded-full hidden md:block">
            Explore Premium
          </button>
          <button className="bg-black text-white py-1 px-4 rounded-full">
            Install App
          </button>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            A
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black py-1 px-4 rounded-full cursor-pointer">All</p>
        <p className="bg-black py-1 px-4 rounded-full cursor-pointer">Music</p>
        <p className="bg-black py-1 px-4 rounded-full cursor-pointer">Podcasts</p>
      </div>
    </>
  );
};

export default Navbar;
