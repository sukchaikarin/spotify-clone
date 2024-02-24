import React from "react";
import SplitPane from "react-split-pane";
import Sidebar from "./side/Sidebar";
import PlayMenu from "./PlayMenu";

import "../css/Mainpage.css"
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col  h-screen">
      <div className="flex h-screen gap-2">
        <SplitPane
          className="p-2"
          split="vertical"
          minSize={280}
          maxSize={420}
          defaultSize={300}
        >
          <Sidebar />
          <div className="flex grow bg-lime-900 h-[616px]  text-white rounded-lg relative">
          {children}
          </div>
        </SplitPane>
      </div>
      <div className="flex h-20 px-2 pb-2">
        <PlayMenu />
      </div>
    </div>
  );
};

export default Layout;
