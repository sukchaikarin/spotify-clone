import React from "react";
import { useSelector } from "react-redux";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import ImageProfile from "./ImageProfile";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";

const Navbar = ({ children }) => {
  const data = useSelector((state) => state.member.member);
  console.log(` data โว้ยยยย ${data?.img?.type}`);

  return (
    <div className="flex justify-between items-center px-7 bg-neutral-950  rounded-t-lg  absolute h-16 w-full z-50">
      {children}
      <div className="flex gap-2 justify-center items-center">
        <button className="bg-white font-semibold text-sm text-black   px-[15px] py-[6px] flex justify-center items-center  rounded-full transform transition-transform hover:scale-105 hover:font-bold">
          Explore Premium
        </button>
        <button className="pr-4 pl-9 py-[6px] flex gap-1 relative justify-center items-center bg-neutral-700 font-semibold text-sm text-white   rounded-full transform transition-transform hover:scale-105 hover:font-bold">
          <IoArrowDownCircleOutline
            className="absolute left-[11px] top-[6px]  "
            size={22}
          />
          Install App
        </button>
        <button className="p-[7px] flex  justify-center items-center bg-neutral-700  text-white   rounded-full transform transition-transform hover:scale-105 hover:font-bold">
          <FaRegBell size={18} />
        </button>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="bg-neutral-700 p-1 rounded-full transform transition-transform hover:scale-105"
          >
            {!data?.img?.url ? (
              <FaUserCircle size={28} />
            ) : (
              <ImageProfile srcImg={data?.img?.url} />
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu mt-2 p-2 shadow bg-neutral-700 rounded-sm w-52 "
          >
            <li>
              <a className="flex justify-between items-center">
                Account <AiOutlineExport />
              </a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a className="flex justify-between items-center">
                Upgrade to Premium <AiOutlineExport />
              </a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <hr />
            <li>
              <a>Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
