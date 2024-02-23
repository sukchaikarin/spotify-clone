import React from "react";
import SpotifyLogo from "./SpotifyLogo";
import { GoHome, GoSearch } from "react-icons/go";
const MainMenu = () => {
  return (
    <div className="flex flex-col bg-neutral-900 h-52 text-black rounded-lg">
      <div
        className="flex flex-col-reverse h-14  rounded-t-lg px-5 "
        style={{ width: "fit-content" }}
      >
        <SpotifyLogo />
      </div>
      <div className="flex flex-col  gap-2 px-3 m-2 h-5/6  py-3">
        <button className="flex grow  h-full items-center  gap-3 font-bold text-slate-600 hover:text-white">
          <GoHome size={26} />
          Home
        </button>
        <button className="flex grow   h-full items-center  gap-3 font-bold text-slate-600 hover:text-white">
          <GoSearch size={26} />
          Search
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
