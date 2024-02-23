import React from "react";
import "../../css/sidemenu.css";
const SideMenu = () => {
  return (
    <div className="flex flex-col bg-neutral-900 gap-5 h-[447px] text-white rounded-lg relative">
      <div className="absolute bg-zinc-900 w-full  h-14 rounded-t-lg">
        1111111
      </div>
      <div className="flex h-40 mt-14 bg-slate-700 overflow-hidden  hover:overflow-y-auto ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, laborum
        error nisi, blanditiis officia porro illo suscipit minima, aliquid nemo
        mollitia rem aperiam! Doloribus vero assumenda consequatur ea soluta
        neque distinctio cumque illum praesentium? Corrupti dolores iure
        voluptatum libero sit. Placeat distinctio facilis explicabo repellendus
        perspiciatis at nihil minus perferendis.
      </div>
      <div className="flex flex-col  mt-6 h-32 gap-4  ">
        <div className="flex flex-wrap  gap-4 h-auto mx-5">
          <button className="text-xs ">Legal</button>
          <button className="text-xs ">Safety & Privacy Center</button>
          <button className="text-xs ">Privacy Policy</button>
          <button className="text-xs ">Cookies</button>
          <button className="text-xs ">About Ads</button>
          <button className="text-xs ">Accessibility</button>
        </div>

        <div className="text-xs mx-5 grow ">Cookies</div>
      </div>

      <div>5</div>
    </div>
  );
};

export default SideMenu;
