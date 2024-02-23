import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import PlayMenu from "./PlayMenu";

const Mainpage = () => {
  return (
    <div className="flex flex-col p-2 h-screen  ">
      <div className="flex h-screen gap-2">
        <Sidebar />
        <MainContent />
      </div>
      <div className="flex h-16">
        <PlayMenu />
      </div>
    </div>
  );
};

export default Mainpage;
