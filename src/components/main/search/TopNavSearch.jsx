import Search from "./Search";
import GoBackBtn from "../item/GoBackBtn";
import NavSign from "../item/NavSign";
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
