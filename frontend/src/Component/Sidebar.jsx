import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate=useNavigate();
  
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] flex flex-col justify-around rounded">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p  className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="h-[85%] bg-[#121212]  rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="items-center flex gap-3 ">
            <img className="w-8" src={assets.arrow_icon} alt="" />
            <img className="w-8" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4"> 
            <h1 className="">Create  Your first Play-List</h1>
          <p className="font-light"> It's easy we will help you</p>
            <button className="bg-white text-black rounded-full px-4 py-1.5 mt-4 text-[15px]">Create Playlist</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4"> 
            <h1 className="">Let Find some new Podcast </h1>
          <p className="font-light"> We will keep Update on new episodes</p>
            <button className="bg-white text-black rounded-full px-4 py-1.5 mt-4 text-[15px]">Browse Podcast</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
