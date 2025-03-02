import BottomNav from "./BottomNav";
// eslint-disable-next-line react/prop-types
const Content = ({ children }) => {
  return (
    <div className=" h-[548px]  flex flex-col pl-5 pb-16 mt-16  gap-20 overflow-hidden hover:overflow-y-auto w-full">
      {children}
      <BottomNav />
    </div>
  );
};

export default Content;
