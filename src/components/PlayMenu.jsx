import React, { useState } from "react";
import "./PlayMenu.css"; // Import the CSS file

const PlayMenu = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <>
          <div className="flex grow text-white  ">After Login</div>
        </>
      ) : (
        <div className="flex grow bg-playmenu text-black">Before Login</div>
      )}
    </>
  );
};

export default PlayMenu;
