import React from "react";
import SpotifyLogo from "../SpotifyLogo";
import { GoHome, GoSearch } from "react-icons/go";
const SideTopMenu = () => {
  const logoClassName = "cursor-pointer";
  const logoStyle = { maxWidth: "80px", height: "auto" };
  return (
    <div className="flex flex-col bg-neutral-900 h-40 text-black rounded-lg">
      <div
        className="flex flex-col-reverse h-16  rounded-t-lg px-5 "
        style={{ width: "fit-content" }}
      >
        <SpotifyLogo logoClassName={logoClassName} logoStyle={logoStyle} />
      </div>
      <div className="flex flex-col justify-around gap-3 px-3 m-2 h-5/6  py-2">
        <button className="flex grow  h-full items-center gap-3 font-bold text-gray-400 hover:text-white">
          <GoHome size={26} />
          Home
        </button>
        <button className="flex grow   h-full items-center  gap-3 font-bold text-gray-400 hover:text-white">
          <GoSearch size={26} />
          Search
        </button>
      </div>
    </div>
  );
};

export default SideTopMenu;
