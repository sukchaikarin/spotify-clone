import Layout from "../../Layout.jsx";
import Content from "../item/Content.jsx";
import HomePlaylist from "./HomePlaylist.jsx";
import FirstTopNav from "./FirstTopNav.jsx";
const Homepage = () => {
  return (
    <Layout>
      <FirstTopNav />
      <Content>
        <HomePlaylist />
      </Content>
    </Layout>
  );
};

export default Homepage;
