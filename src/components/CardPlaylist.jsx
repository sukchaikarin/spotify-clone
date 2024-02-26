import React from "react";
import { useSelector } from "react-redux";

const CardPlaylist = () => {
  const data = useSelector((state) => state.uplaylist.playlists);
  console.log(data[0].id);

  return (
    <>
      {data.map((playlist) => {
        const { name, id } = playlist;
        const playlistImg = playlist.images[2].url;
        const owner = playlist.owner.display_name;
        return (
          <div
            key={id}
            className="flex gap-2 rounded-lg w-auto p-2 hover:bg-neutral-800"
          >
            <div>
              <img
                src={playlistImg}
                alt={`${name}-playlist-image`}
                className="rounded-md w-12"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">{name}</span>
              <span className="font-normal text-sm">{owner}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardPlaylist;
