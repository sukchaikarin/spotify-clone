import React from "react";
import "../../css/card.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
const MainContent = () => {
  return (
    <div className="flex grow bg-neutral-900 h-[616px]  text-white rounded-lg relative">
      <div className="flex justify-between items-center px-7 bg-neutral-950  rounded-t-lg  absolute h-16 w-full z-50">
        <div className="my-3 flex justify-center gap-2 items-center">
          <button
            className="flex items-center justify-center
          text-white p-2 rounded-full  bg-black hover:opacity-50 transform transition-transform hover:scale-105 cursor-no-drop "
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            className="flex items-center justify-center
          text-white p-2 rounded-full  bg-black hover:opacity-50 transform transition-transform hover:scale-105  cursor-no-drop"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
        <div className="flex ">
          <button className="font-bold text-gray-400 hover:text-white  w-28 h-12 mr-3 rounded-full transform transition-transform hover:scale-105 hover:font-extrabold">
            Sign up
          </button>
          <button className="bg-white font-bold text-black w-28 h-12 mr-3 rounded-full transform transition-transform hover:scale-105 hover:font-extrabold">
            Log in
          </button>
        </div>
      </div>

      <div className=" h-[548px] flex flex-col px-7 pb-16 mt-16  gap-20 overflow-hidden hover:overflow-y-auto w-full">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className=" text-2xl font-bold hover:underline hover:underline-offset-2">
              Spotify Playlists
            </h1>
          </div>
          <div className="flex flex-col p-3 w-48 h-60 gap-3 bg-cardspotify shadow-md rounded-lg ">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-md"
              />
            </figure>
            <div className="flex flex-col  ">
              <h2 className="">lofi beats</h2>
              <p className="h-12 overflow-hidden bg-slate-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                soluta esse autem ratione quae nam, iusto fuga vel rem quo.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-gray-400 font-semibold">
          <div className="flex justify-between">
            <div className="flex gap-24">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white">Company</span>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  For the Record
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white">Communities</span>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  For Artists
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  Developers
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  Advertising
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  Investors
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  Vendors
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-white">Useful links</span>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:underline hover:underline-offset-1"
                >
                  Free Mobile App
                </a>
              </div>
            </div>
            <div className="flex gap-4 ">
              <a
                href="#"
                className="cursor-auto p-2 h-9 w-9 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-neutral-500"
              >
                <FaInstagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="cursor-auto p-2 h-9 w-9 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-neutral-500"
              >
                <FaTwitter size={15} className="text-white" />
              </a>
              <a
                href="#"
                className="cursor-auto p-2 h-9 w-9 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-neutral-500"
              >
                <FaFacebook size={15} className="text-white" />
              </a>
            </div>
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
