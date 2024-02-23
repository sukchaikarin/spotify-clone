import React from "react";

import PlayMenu from "../PlayMenu";

import "../../css/Mainpage.css";
import MainSection from "./MainSection";
const Mainpage = () => {
  return (
    <div className="flex flex-col  h-screen">
      <MainSection />
      <div className="flex h-20 px-2 pb-2">
        <PlayMenu />
      </div>
    </div>
  );
};

export default Mainpage;
