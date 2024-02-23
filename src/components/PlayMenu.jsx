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
        <div className="flex grow mt-2  bg-playmenu text-black">
          Before Login
        </div>
      )}
    </>
  );
};

export default PlayMenu;
