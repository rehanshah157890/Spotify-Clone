import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useRef } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {

  const displayref=useRef()
  const location=useLocation()
  const isalbum=location.pathname.includes("album")
  const albumid=isalbum?location.pathname.slice(-1):"";
  const bgColor=albumsData[Number(albumid)].bgColor

  useEffect(()=>{
    if(isalbum){displayref.current.style.background=`linear-gradient(${bgColor},#121212)`}
    else
    {
      displayref.current.style.background="#121212"
    }
  })

  return (
    <div ref={displayref} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />}></Route>
        <Route path="/album/:id" element={<DisplayAlbum />}></Route>
      </Routes>
    </div>
  );
};

export default Display;
