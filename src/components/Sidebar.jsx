import React from "react";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 w-96">
      <MainMenu />
      <SideMenu />
    </div>
  );
};

export default Sidebar;
