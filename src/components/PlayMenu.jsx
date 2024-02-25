import { useState } from "react";
import "../css/PlayMenu.css"; // Import the CSS file
import { Link } from "react-router-dom";

const PlayMenu = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <>
          <div className="flex grow  text-white">After Login</div>
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
