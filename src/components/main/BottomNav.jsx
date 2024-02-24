import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
const BottomNav = () => {
  return (
    <div className="flex flex-col text-gray-400 font-semibold">
      <div className="flex justify-between">
        <div className="flex gap-24">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-white">Company</span>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              Jobs
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              For the Record
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-white">Communities</span>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              For Artists
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              Developers
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              Advertising
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              Investors
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              Vendors
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-white">Useful links</span>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              Support
            </a>
            <a
              href="#"
              className="hover:text-white hover:underline hover:underline-offset-1"
            >
              Free Mobile App
            </a>
          </div>
        </div>
        <div className="flex gap-4 ">
          <a
            href="#"
            className="cursor-auto p-2 h-9 w-9 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-neutral-500"
          >
            <FaInstagram size={20} className="text-white" />
          </a>
          <a
            href="#"
            className="cursor-auto p-2 h-9 w-9 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-neutral-500"
          >
            <FaTwitter size={15} className="text-white" />
          </a>
          <a
            href="#"
            className="cursor-auto p-2 h-9 w-9 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-neutral-500"
          >
            <FaFacebook size={15} className="text-white" />
          </a>
        </div>
      </div>
      <div className="w-full my-10 bg-neutral-700 h-[1px]" />
      <div className="text-gray-400 text-sm font-semibold">
        &#169; 2024 Spotify AB
      </div>
    </div>
  );
};

export default BottomNav;
