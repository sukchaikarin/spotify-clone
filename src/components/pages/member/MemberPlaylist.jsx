import { useState } from "react";
import MusicCard from "../../MusicCard";

const MemberPlaylist = () => {
  const [showAll, setShowAll] = useState(false); // สร้าง state เพื่อเก็บสถานะการแสดงข้อมูลทั้งหมด

  const products = new Array(10).fill(null); // สร้าง array ที่มีข้อมูล null 10 รายการ

  // เลือกจำนวนplaylistที่จะแสดงโดยใช้ตัวแปร showAll
  const displayedProducts = showAll ? products : products.slice(0, 6);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between mr-6">
        <h1 className=" text-2xl font-bold hover:underline hover:underline-offset-2">
          Spotify Playlists
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
        {displayedProducts.map((product, index) => (
          <MusicCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default MemberPlaylist;
