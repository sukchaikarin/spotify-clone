import SideMenu from "./SideMenu";
import SideTopMenu from "./SideTopMenu";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full gap-2 ">
      <SideTopMenu />
      <SideMenu />
    </div>
  );
};

export default Sidebar;
