import Search from "./Search";
import GoBackBtn from "../../GoBackBtn";
import NavSign from "../../NavSign";
const TopNavSearch = () => {
  return (
    <NavSign>
      <GoBackBtn>
        <Search />
      </GoBackBtn>
    </NavSign>
  );
};

export default TopNavSearch;
