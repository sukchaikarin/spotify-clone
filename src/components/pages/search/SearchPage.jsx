import Layout from "../../Layout";
import Content from "../../Content";
import BrowseAll from "../../BrowseAll";
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
