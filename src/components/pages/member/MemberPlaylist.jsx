import { useEffect, useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPlaylists } from "../../../store/uplaylistsSlice";
import { setPlaylistId } from "../../../store/playlistIdSlice";
import ImageProfile from "../../ImageProfile";
import { formatDuration } from "../../../utils/utilities";
import { setCurrent } from "../../../store/playingSlice";
import { setPlay } from "../../../store/playSlice";

const MemberPlaylist = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.tokenData);
  const userData = useSelector((state) => state.member.member);
  const data = useSelector((state) => state.playlistId.playlistId);

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      console.log("มาเอาด้าต้าตรงนี้", response?.data?.items[0].id);

      const selectedPlaylistId = response?.data?.items[0].id;
      const getInitialPlaylist = async () => {
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
          image: response.data.images[0].url || "https://placehold.co/100",
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

      getInitialPlaylist();

      const { items } = response.data;
      const playlists = items.map(({ name, id, images, owner }) => {
        return { name, id, images, owner };
      });
      dispatch(setPlaylists(playlists));
    };
    if (token) {
      getPlaylistData();
    }
  }, [token]);

  const playTrack = async (
    id,
    name,
    artists,
    image,
    context_uri,
    track_number,
    token
  ) => {
    const currentPlaying = {
      id,
      name,
      artists,
      image,
    };
    dispatch(setCurrent(currentPlaying));

    // const response = await axios.put(
    //   `https://api.spotify.com/v1/me/player/play`,
    //   {
    //     context_uri,
    //     offset: {
    //       position: track_number - 1,
    //     },
    //     position_ms: 0,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + token,
    //     },
    //   }
    // );
    // if (response.status === 204) {
    //   const currentPlaying = {
    //     id,
    //     name,
    //     artists,
    //     image,
    //   };
    //   dispatch(setCurrent(currentPlaying));
    // } else {
    //   dispatch(setPlay(true));
    // }
  };
  //console.log(selectedPlaylist);
  const playlistName = data?.name;
  const playlistImg = data?.image;
  const countSong = data?.tracks?.length;
  const userImg = userData?.img?.url;
  const tracks = data?.tracks;
  const playlistId2 = data?.id;
  return (
    <>
      <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/embed/playlist/${playlistId2}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        style={{ minHeight: "400px" }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <div className="flex  gap-6 items-center  ">
        <img
          className="w-52 rounded-lg shadow-gray-600 shadow-md "
          src={playlistImg}
          alt={`${playlistName}-playlist-image`}
        />
        <div className="flex flex-col h-full justify-end ">
          <span>Playlist</span>
          <h1 className="text-white text-[56px] font-extrabold leading-none">
            {playlistName}
          </h1>
          <div className="flex gap-1 items-center relative mt-3">
            <ImageProfile srcImg={userImg} styleImg={"h-7 w-7 rounded-full"} />
            <TbPointFilled size={10} className="absolute bottom-[5px] left-7" />
            <span className="ml-2">{countSong} songs</span>
          </div>
        </div>
      </div>

      <table className="table-auto w-full  text-left">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>

            <th>duration</th>
          </tr>
        </thead>
        <tbody>
          {tracks?.map(
            (
              {
                id,
                name,
                artists,
                image,
                duration,
                album,
                context_uri,
                track_number,
              },
              index
            ) => {
              //console.log(track);
              return (
                <tr
                  key={id}
                  className="hover:bg-neutral-700 "
                  onClick={() =>
                    playTrack(
                      id,
                      name,
                      artists,
                      image,
                      context_uri,
                      track_number,
                      token
                    )
                  }
                >
                  <td>{index + 1}</td>
                  <td className="flex gap-2">
                    <img src={image} alt={`${name}-image`} />{" "}
                    <div className="flex flex-col">
                      <span>{name}</span>
                      <span className="text-sm text-gray-400">
                        {artists.join(", ")}
                      </span>
                    </div>
                  </td>
                  <td>{album}</td>
                  <td className="text-center">{formatDuration(duration)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default MemberPlaylist;
