import SpotifyLogo from "./SpotifyLogo";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BsSearchHeart, BsSearchHeartFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const SideTopMenu = () => {
  const [isLogin, setIsLogin] = useState(false);

  const data = useSelector((state) => state.member.member);

  useEffect(() => {
    // ตรวจสอบว่ามีข้อมูล data หรือไม่
    if (data) {
      // ถ้ามีข้อมูลให้ตั้งค่า isLogin เป็น true
      setIsLogin(true);
    }
  }, [data]);

  const location = useLocation();
  const logoClassName = "cursor-pointer";
  const logoStyle = { maxWidth: "80px", height: "auto" };
  return (
    <>
      {isLogin ? (
        <>
          <div className="flex flex-col bg-neutral-900 h-40 text-black rounded-lg">
            <Link to={"/member"}>
              <div
                className="flex flex-col-reverse h-16  rounded-t-lg px-5 "
                style={{ width: "fit-content" }}
              >
                <SpotifyLogo
                  logoClassName={logoClassName}
                  logoStyle={logoStyle}
                />
              </div>
            </Link>
            <div className="flex flex-col justify-around gap-3 px-3 m-2 h-5/6  py-2">
              <Link to={"/member"}>
                <button
                  className={`flex grow  h-full items-center gap-3 font-bold ${
                    location.pathname === "/" ? "text-white" : "text-gray-400"
                  } hover:text-white`}
                >
                  {location.pathname === "/" ? (
                    <GoHomeFill size={26} />
                  ) : (
                    <GoHome size={26} />
                  )}
                  Home
                </button>
              </Link>
              <Link to={"/search"}>
                <button
                  className={`flex grow  h-full items-center gap-3 font-bold ${
                    location.pathname === "/search"
                      ? "text-white"
                      : "text-gray-400"
                  } hover:text-white`}
                >
                  {location.pathname === "/search" ? (
                    <BsSearchHeartFill size={26} />
                  ) : (
                    <BsSearchHeart size={26} />
                  )}
                  Search
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col bg-neutral-900 h-40 text-black rounded-lg">
          <Link to={"/"}>
            <div
              className="flex flex-col-reverse h-16  rounded-t-lg px-5 "
              style={{ width: "fit-content" }}
            >
              <SpotifyLogo
                logoClassName={logoClassName}
                logoStyle={logoStyle}
              />
            </div>
          </Link>
          <div className="flex flex-col justify-around gap-3 px-3 m-2 h-5/6  py-2">
            <Link to={"/"}>
              <button
                className={`flex grow  h-full items-center gap-3 font-bold ${
                  location.pathname === "/" ? "text-white" : "text-gray-400"
                } hover:text-white`}
              >
                {location.pathname === "/" ? (
                  <GoHomeFill size={26} />
                ) : (
                  <GoHome size={26} />
                )}
                Home
              </button>
            </Link>
            <Link to={"/search"}>
              <button
                className={`flex grow  h-full items-center gap-3 font-bold ${
                  location.pathname === "/search"
                    ? "text-white"
                    : "text-gray-400"
                } hover:text-white`}
              >
                {location.pathname === "/search" ? (
                  <BsSearchHeartFill size={26} />
                ) : (
                  <BsSearchHeart size={26} />
                )}
                Search
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SideTopMenu;
