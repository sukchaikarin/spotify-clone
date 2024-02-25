import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import TopNav from "./TopNav";
import MemberPlaylist from "./MemberPlaylist";
import Content from "../../Content";
import { useDispatch, useSelector } from "react-redux";
const BACKEND_URL = "http://localhost:3000";
import axios from "axios";
import { addMember } from "../../../store/membersSlice";
import { GoogleLogout } from "react-google-login";

const Member = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.members.memberData);
  console.log(data.type);
  console.log("this is the data", data);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/member`, {
        withCredentials: true,
      });
      if (response.status === 200 && response.data) {
        dispatch(addMember(response.data.memberData));
        console.log(response.data.memberData);
      }
    };

    // ตรวจสอบว่า data.type เป็น undefined หรือไม่
    if (data.type === undefined) {
      getData();
      console.log("this is undefiend ,", data); // เรียกใช้ getData() เมื่อ data.type เป็น undefined
    }
  }, []);

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
