import { useState } from "react";
import MusicCard from "./MusicCard";
import { useSelector } from "react-redux";

const BrowseAll = () => {
  const [showAll, setShowAll] = useState(false); // สร้าง state เพื่อเก็บสถานะการแสดงข้อมูลทั้งหมด

  const data = useSelector((state) => state.playlists.playlistData);

  // เลือกจำนวนplaylistที่จะแสดงโดยใช้ตัวแปร showAll
  const displayedMusics = showAll
    ? data?.playlists?.items || []
    : data?.playlists?.items?.slice(0, 6) || [];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between mr-6">
        <h1 className=" text-2xl font-bold hover:underline hover:underline-offset-2">
          Spotify Playlists{""}
        </h1>
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="text-sm font-bold hover:underline   text-gray-400"
          >
            Show all
          </button>
        )}
      </div>

      <div className="flex flex-wrap  gap-[21px]">
        {displayedMusics.map((product) => {
          //console.log(product);
          return (
            <MusicCard
              key={product.id}
              srcImg={product.images[0].url}
              name={product.name}
              desc={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrowseAll;
