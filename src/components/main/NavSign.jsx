import React from "react";
import SignUpSignIn from "./SignUpSignIn";
const NavSign = ({ children }) => {
  return (
    <div className="flex justify-between items-center px-7 bg-neutral-950  rounded-t-lg  absolute h-16 w-full z-50">
      {children}
      <SignUpSignIn />
    </div>
  );
};

export default NavSign;
