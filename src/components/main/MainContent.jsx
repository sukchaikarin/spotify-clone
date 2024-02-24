import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const MainContent = () => {
  return (
    <div className="flex grow bg-neutral-900 h-[616px]  text-white rounded-lg relative">
      <div className="flex justify-between px-7 bg-neutral-950  rounded-t-lg  absolute h-16 w-full z-50">
        <div className="my-3 flex justify-center gap-2 items-center">
          <button
            className="flex items-center justify-center
          text-white p-2 rounded-full  bg-black hover:opacity-50 transform transition-transform hover:scale-105 cursor-no-drop "
          >
            <AiOutlineLeft size={20} />
          </button>
          <button
            className="flex items-center justify-center
          text-white p-2 rounded-full  bg-black hover:opacity-50 transform transition-transform hover:scale-105  cursor-no-drop"
          >
            <AiOutlineRight size={20} />
          </button>
        </div>
        <div>bsg</div>
      </div>

      <div className=" h-96 flex flex-col mt-16 mx-7 gap-20 overflow-hidden hover:overflow-y-auto w-full">
        <div className="flex flex-col">
          <div>
            <h1 className=" text-2xl font-bold">Spotify Playlists</h1>
          </div>
          <div>card</div>
        </div>

        <div className="flex flex-col text-gray-400">
          <div className="flex justify-between">
            <div className="flex gap-24">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white">Company</span>
                <span>About</span>
                <span>Jobs</span>
                <span>For the Record</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white">Communities</span>
                <span>For Artists</span>
                <span>Developers</span>
                <span>Advertising</span>
                <span>Investors</span>
                <span>Vendors</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white">Useful links</span>
                <span>Support</span>
                <span>Free Mobile App</span>
              </div>
            </div>
            <div>logo3</div>
          </div>
          <div className="w-full my-10 bg-neutral-700 h-[1px]" />
          <div className="text-gray-400 text-sm font-semibold">
            &#169; 2024 Spotify AB
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
