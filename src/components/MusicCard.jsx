import { FaCirclePlay } from "react-icons/fa6";
import "../css/playcard.css";

const MusicCard = ({ srcImg, name, desc }) => {
  return (
    <div className="music-card cursor-pointer hover:bg-neutral-700 flex flex-col p-4 w-44 h-64 justify-between items-center gap-[14px] bg-neutral-800 shadow-md rounded-lg">
      <div className="relative">
        <figure>
          <img src={srcImg} alt="Shoes" className="rounded-md" />
        </figure>

        <button className="absolute play-card rounded-full  shadow-lg text-[#1ed55f]">
          <FaCirclePlay size={45} />
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="h-[25px] w-36 text-left overflow-hidden whitespace-nowrap">
          {name}
        </h2>
        <p className="text-sm h-[38px] w-36 overflow-hidden">{desc}</p>
      </div>
    </div>
  );
};

export default MusicCard;
