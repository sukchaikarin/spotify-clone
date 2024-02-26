import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPlaylists } from "../../../store/uplaylistsSlice";

const MemberPlaylist = () => {
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false); // สร้าง state เพื่อเก็บสถานะการแสดงข้อมูลทั้งหมด

  const token = useSelector((state) => state.token.tokenData);
  useEffect(() => {
    console.log(`this is a token of u ${token}`);

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

    getPlaylistData();
  }, [token]);

  // เลือกจำนวนplaylistที่จะแสดงโดยใช้ตัวแปร showAll
  // const displayedMusics = showAll
  //   ? data?.playlists?.items || []
  //   : data?.playlists?.items?.slice(0, 6) || [];

  return <div className="flex flex-col gap-2">asdasd</div>;
};

export default MemberPlaylist;
