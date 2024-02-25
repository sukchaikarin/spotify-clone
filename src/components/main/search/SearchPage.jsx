import Layout from "../../Layout";
import Content from "../item/Content";
import BrowseAll from "../item/BrowseAll";
import TopNavSearch from "./TopNavSearch";
const SearchPage = () => {
  return (
    <Layout>
      <TopNavSearch />
      <Content>
        <BrowseAll />
      </Content>
    </Layout>
  );
};

export default SearchPage;
