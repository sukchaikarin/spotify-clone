import BottomNav from "./BottomNav";
const Content = ({ children }) => {
  return (
    <div className=" h-[548px]  flex flex-col pl-5 pb-16 mt-16  gap-20 overflow-hidden hover:overflow-y-auto w-full">
      {children}
      <BottomNav />
    </div>
  );
};

export default Content;
