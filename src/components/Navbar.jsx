import React from "react";
import { useSelector } from "react-redux";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import ImageProfile from "./ImageProfile";
import { AiOutlineExport } from "react-icons/ai";
import { GoogleLogout } from "react-google-login";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const clientID =
  "660556148422-ag17p365alu1ti4fptoco0il1o5va1j3.apps.googleusercontent.com";
const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.members.memberData);
  const logOut = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successful",
      showConfirmButton: true,
      timer: 1500,
    }).then(() => {
      navigate("/");
    });

    console.log("logout success");
  };
  return (
    <div className="flex justify-between items-center px-7 bg-neutral-950  rounded-t-lg  absolute h-16 w-full z-50">
      {children}
      <div class="flex gap-2 justify-center items-center">
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
            <ImageProfile srcImg={data.imageUrl} />
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
              <GoogleLogout
                clientId={clientID}
                buttonText="Log out"
                onLogoutSuccess={logOut}
                render={({ onClick }) => <a onClick={onClick}>Log out</a>}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
