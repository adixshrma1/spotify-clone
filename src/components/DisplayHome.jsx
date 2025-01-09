import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto no-scrollbar">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Hit</h1>
        <div className="flex overflow-auto no-scrollbar">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
