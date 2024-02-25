import React from "react";
import Layout from "../../Layout";
import TopNav from "./TopNav";
import MemberPlaylist from "./MemberPlaylist";
import Content from "../../Content";

const Member = () => {
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
