import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPlaylists } from "../../../store/uplaylistsSlice";

const MemberPlaylist = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.tokenData);
  useEffect(() => {
    console.log(`this is a token of u ${token}`);
    console.log(`this is a tokentype of u ${token.type}`);
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
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch(setPlaylists(playlists));
    };
    if (token) {
      getPlaylistData();
    }
  }, [token]);

  return <div className="flex flex-col gap-2">asdasd</div>;
};

export default MemberPlaylist;
