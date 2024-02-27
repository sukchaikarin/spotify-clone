import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylistId } from "../store/playlistIdSlice";
import axios from "axios";

const CardPlaylist = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.uplaylist.playlists);
  const token = useSelector((state) => state.token.tokenData);
  const getInitialPlaylist = async (selectedPlaylistId) => {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const selectedPlaylist = {
      id: response.data.id,
      name: response.data.name,
      description: response.data.description.startsWith("<a")
        ? ""
        : response.data.description,
      image: response.data.images[0].url,
      tracks: response.data.tracks.items.map(({ track }) => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map((artist) => artist.name),
        image: track.album.images[2].url,
        duration: track.duration_ms,
        album: track.album.name,
        context_uri: track.album.uri,
        track_number: track.track_number,
      })),
    };

    dispatch(setPlaylistId(selectedPlaylist));
  };
  return (
    <>
      {data?.map((playlist) => {
        const { name, id } = playlist;
        const playlistImg =
          playlist.images[0].url || "https://placehold.co/100";
        const owner = playlist.owner.display_name;
        return (
          <div
            key={id}
            onClick={() => getInitialPlaylist(id)}
            className="flex gap-2 rounded-lg w-auto p-2 hover:bg-neutral-800 cursor-pointer"
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
