import React, { useState } from "react";
import "../css/PlayMenu.css"; // Import the CSS file

const PlayMenu = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <>
          <div className="flex grow  text-white  ">After Login</div>
        </>
      ) : (
        <div className="flex justify-between items-center p-4 grow mt-2  bg-playmenu text-black">
          <div className="flex flex-col text-white font-semibold">
            <span className="text-sm">Preview of Spotify</span>
            <span>
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed.
            </span>
          </div>
          <button className="bg-white font-bold text-black w-36 h-12 mr-3 rounded-full">
            Sign up free
          </button>
        </div>
      )}
    </>
  );
};

export default PlayMenu;
