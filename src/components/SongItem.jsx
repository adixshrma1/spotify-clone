import React from "react";
import { usePlayer } from "../context/PlayerContext";

const SongItem = ({ image, name, desc, id }) => {
  const {playWithId} = usePlayer();
  return (
    <div onClick={()=>playWithId(id)} className="min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} />
      <h1 className="font-bold mt-2 mb-1">{name}</h1>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
