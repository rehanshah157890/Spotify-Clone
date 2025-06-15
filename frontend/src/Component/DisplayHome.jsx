import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import Songdata from "./Songdata";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl"> Featured Chart</h1>

        <div className="flex overflow-auto ">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>

        <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl"> Today Best Songs</h1>

        <div className="flex overflow-auto ">
          {songsData.map((item,index)=>(<Songdata key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
