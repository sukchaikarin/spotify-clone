import "../css/sidemenu.css";

import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";

import { useSelector } from "react-redux";
import NoPlaylist from "./NoPlaylist";
import CardPlaylist from "./CardPlaylist";
const SideMenu = () => {
  const data = useSelector((state) => state.uplaylist.playlists);

  return (
    <div className="flex flex-col bg-neutral-900  h-[447px] text-white rounded-lg relative">
      <div className="flex justify-between items-center w-full mb-4 h-14 rounded-t-lg p-3 pl-6  absolute ">
        <div className="flex gap-2 items-center text-gray-400 hover:text-white cursor-pointer">
          <VscLibrary size={30} />
          <span className="font-bold text-md">Your Library</span>
        </div>
        <div>
          <button className="text-gray-300 text-center  hover:text-gray- hover:bg-neutral-800 rounded-full p-2">
            <FaPlus size={18} />
          </button>
        </div>
      </div>

      {data && data.length > 0 ? (
        <div className="mt-12">
          <CardPlaylist />
        </div>
      ) : (
        <NoPlaylist />
      )}
    </div>
  );
};

export default SideMenu;
