import React from "react";
import GoBackBtn from "../../GoBackBtn";
import Navbar from "../../Navbar";

import Search from "../search/Search";
const TopNav = () => {
  return (
    <Navbar>
      <GoBackBtn>
        <Search />
      </GoBackBtn>
    </Navbar>
  );
};

export default TopNav;
