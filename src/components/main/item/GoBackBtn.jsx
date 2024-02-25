
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const GoBackBtn = ({ children }) => {
  return (
    <>
      <div className="my-3 flex justify-center gap-2 items-center">
        <button
          className="flex items-center justify-center
          text-white p-2 rounded-full  bg-black hover:opacity-50 transform transition-transform hover:scale-105 cursor-no-drop "
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          className="flex items-center justify-center
          text-white p-2 rounded-full  bg-black hover:opacity-50 transform transition-transform hover:scale-105  cursor-no-drop"
        >
          <FaChevronRight size={16} />
        </button>
        {children}
      </div>
    </>
  );
};

export default GoBackBtn;
