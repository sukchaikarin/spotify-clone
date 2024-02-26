import { useEffect, useState } from "react";
import "../css/PlayMenu.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PlayMenu = () => {
  const [isLogin, setIsLogin] = useState(false);

  const data = useSelector((state) => state.member.member);

  // useEffect(() => {
  //   // ตรวจสอบว่ามีข้อมูล data หรือไม่
  //   if (data) {
  //     // ถ้ามีข้อมูลให้ตั้งค่า isLogin เป็น true
  //     setIsLogin(true);
  //   }
  // }, [data]);
  return (
    <>
      {isLogin ? (
        <>
          <div className="flex grow justify-center items-start text-white bg-slate-500">
            <div className="grow bg-lime-500 h-full">1</div>
            <div className="grow bg-rose-500  h-full"></div>
            <div className="grow bg-slate-700  h-full">3</div>
          </div>
        </>
      ) : (
        <Link
          to={"/signup"}
          className="flex justify-between  z-50 items-center p-4 grow mt-2  bg-playmenu text-black"
        >
          <div className="flex flex-col text-white font-semibold">
            <span className="text-sm">Preview of Spotify</span>
            <span>
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed.asd
            </span>
          </div>

          <button className="bg-white font-bold text-black w-36 h-12 mr-3 rounded-full transform transition-transform hover:scale-105 hover:font-extrabold">
            Sign up free
          </button>
        </Link>
      )}
    </>
  );
};

export default PlayMenu;
