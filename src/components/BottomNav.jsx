import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import LinkItem from "./LinkItem";
import SocialItem from "./SocialItem";

const BottomNav = () => {
  return (
    <div className="flex flex-col text-gray-400 font-semibold">
      <div className="flex justify-between">
        <div className="flex gap-24">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-white">Company</span>
            <LinkItem href="#" text="About" />
            <LinkItem href="#" text="Jobs" />
            <LinkItem href="#" text="For the Record" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-white">Communities</span>
            <LinkItem href="#" text="For Artists" />
            <LinkItem href="#" text="Developers" />
            <LinkItem href="#" text="Advertising" />
            <LinkItem href="#" text="Investors" />
            <LinkItem href="#" text="Vendors" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-white">Useful links</span>
            <LinkItem href="#" text="Support" />
            <LinkItem href="#" text="Free Mobile App" />
          </div>
        </div>
        <div className="flex gap-4 ">
          <SocialItem href="#" icon={FaInstagram} size={20} />
          <SocialItem href="#" icon={FaTwitter} size={15} />
          <SocialItem href="#" icon={FaFacebook} size={15} />
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
