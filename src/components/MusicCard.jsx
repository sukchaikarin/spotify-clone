import { FaCirclePlay } from "react-icons/fa6";
import "../css/playcard.css";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylistId } from "../store/playlistIdSlice";
import axios from "axios";

const MusicCard = ({ srcImg, name, desc, playlistId }) => {
  const dispatch = useDispatch();
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
    <div
      onClick={() => getInitialPlaylist(playlistId)}
      className="music-card  cursor-pointer hover:bg-neutral-700 flex flex-col p-4 w-44 h-64 justify-between items-center gap-[14px] bg-neutral-800 shadow-md rounded-lg"
    >
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
