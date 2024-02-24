import React from "react";
import SplitPane from "react-split-pane";
import Sidebar from "../side/Sidebar";
import MainContent from "./MainContent";
const MainSection = () => {
  return (
    <div className="flex h-screen gap-2">
      <SplitPane
        className="p-2"
        split="vertical"
        minSize={280}
        maxSize={420}
        defaultSize={300}
      >
        <Sidebar />
        <MainContent />
      </SplitPane>
    </div>
  );
};

export default MainSection;
