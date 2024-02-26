import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPlaylists } from "../../../store/uplaylistsSlice";
import { setPlaylistId } from "../../../store/playlistIdSlice";

const MemberPlaylist = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.tokenData);

  const data = useSelector((state) => state.playlistId.playlistId);

  useEffect(() => {
    // console.log(`this is a token of u ${token}`);
    // console.log(`this is a tokentype of u ${token.type}`);
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
      console.log("มาเอาด้าต้าตรงนี้", response.data.items[0].id);

      const selectedPlaylistId = response.data.items[0].id;
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
        console.log(selectedPlaylist);
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

  const playlistname = data?.name;

  return <div className="flex flex-col gap-2">{playlistname}</div>;
};

export default MemberPlaylist;
