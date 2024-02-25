import React from "react";
import { useSelector } from "react-redux";

const Navbar = ({ children }) => {
  const data = useSelector((state) => state.members.memberData);

  return (
    <div className="flex justify-between items-center px-7 bg-neutral-950  rounded-t-lg  absolute h-16 w-full z-50">
      {children}
      {data.name}
      {data.name}
      {data.name}
      {data.name}
    </div>
  );
};

export default Navbar;
