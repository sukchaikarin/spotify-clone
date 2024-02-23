import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import PlayMenu from "./PlayMenu";

const Mainpage = () => {
  return (
    <div className="flex flex-col p-4 h-screen gap-2 bg-teal-300">
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
