import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import TopNav from "./TopNav";
import MemberPlaylist from "./MemberPlaylist";
import Content from "../../Content";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToken } from "../../../store/tokenSlice";
import { setMember } from "../../../store/memberSlice";

const Member = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.tokenData);
  //console.log(data.type);
  //console.log("this is the data", data);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      //console.log(`the token is ${token}`);
      dispatch(setToken(token));
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const getMemberData = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
     // console.log(data);
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        img: data.images[0] || null,
      };

      dispatch(setMember(userInfo));
    };
    if (token) {
      getMemberData();
    }
  }, [token]);

  return (
    <Layout>
      <TopNav />
      <Content>
        <MemberPlaylist />
      </Content>
    </Layout>
  );
};

export default Member;
