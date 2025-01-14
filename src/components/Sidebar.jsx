import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-1/4 h-full p-2 hidden lg:flex flex-col gap-2 text-white">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=> navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} />
            <p>Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} />
            <img className="w-5" src={assets.plus_icon} />
          </div>
        </div>
        <div className="bg-[#242424] m-2 p-4 rounded font-semibold">
            <h1 className="mb-2">Create your first playlist</h1>
            <p className="font-light mb-4">It's easy we will help you</p>
            <button className="bg-white py-1.5 px-4 rounded-full text-black">Create Playlist</button>
        </div>
        <div className="bg-[#242424] m-2 p-4 rounded font-semibold mt-4">
            <h1 className="mb-2">Lets find some podcasts to follow</h1>
            <p className="font-light mb-4">We'll keep you update for new episodes</p>
            <button className="bg-white py-1.5 px-4 rounded-full text-black">Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
