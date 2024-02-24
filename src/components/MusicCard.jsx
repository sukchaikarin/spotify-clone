import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import "../css/playcard.css";
const MusicCard = () => {
  return (
    <div
      id="music-card"
      className="cursor-pointer hover:bg-neutral-700 flex flex-col p-4 w-44 h-64 justify-between items-center gap-[14px] bg-neutral-800 shadow-md rounded-lg "
    >
      <div className="relative">
        <figure>
          <img
            src="https://placehold.co/144"
            alt="Shoes"
            className="rounded-md"
          />
        </figure>
        <button
          id="play-card"
          className="absolute bg-black rounded-full  shadow-lg text-[#1ed55f]   "
        >
          <FaCirclePlay size={45} />
        </button>
      </div>
      <div className="flex flex-col   ">
        <h2 className="h-[25px]">lofi beats</h2>
        <p className="text-sm h-[38px] overflow-hidden ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam soluta
          esse autem ratione quae nam, iusto fuga vel rem quo.
        </p>
      </div>
    </div>
  );
};

export default MusicCard;
