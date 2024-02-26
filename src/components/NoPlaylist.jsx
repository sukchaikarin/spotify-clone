import React from "react";
import CardPlaylist from "./CardPlaylist";
import { TbWorld } from "react-icons/tb";
const NoPlaylist = () => {
  return (
    <>
      <div className="flex flex-col gap-5 h-40 mt-14 mx-2 overflow-hidden   hover:overflow-y-auto ">
        <div className="flex flex-col   gap-6 bg-neutral-800 rounded-lg w-auto p-4 ">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Create your first playlist</span>
            <span className="font-normal text-sm">
              It's easy, we'll help you
            </span>
          </div>
          <div>
            <button className="font-bold h-8 rounded-full text-center bg-white text-sm text-black px-3 py-1 transform transition-transform hover:scale-105">
              Create playlist
            </button>
          </div>
        </div>
        <div className="flex flex-col   gap-6  bg-neutral-800 rounded-lg w-auto p-4 ">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">
              Let's find some podcasts to follow
            </span>
            <span className="font-normal text-sm">
              We'll keep you updated on new episodes
            </span>
          </div>
          <div>
            <button className="font-bold h-8 text-center  rounded-full bg-white text-sm text-black px-3 py-1 transform transition-transform hover:scale-105">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col   mt-6 h-32 gap-5  ">
        <div className="flex flex-wrap  gap-x-4 gap-y-3 h-auto mx-5">
          <button className="text-[11px] ">Legal</button>
          <button className="text-[11px] ">Safety & Privacy Center</button>
          <button className="text-[11px] ">Privacy Policy</button>
          <button className="text-[11px] ">Cookies</button>
          <button className="text-[11px] ">About Ads</button>
          <button className="text-[11px] ">Accessibility</button>
        </div>

        <div className="text-[11px] mx-5 grow ">Cookies</div>
      </div>
      <div className="mx-5 mb-8">
        <button className="flex font-semibold text-sm rounded-full border-[1px] border-purple-500 bg-transparent justify-center items-center gap-1 px-3 py-1 transform transition-transform hover:scale-105 hover:border-white">
          <TbWorld size={23} />
          English
        </button>
      </div>
    </>
  );
};

export default NoPlaylist;
