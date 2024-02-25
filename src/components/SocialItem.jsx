const SocialItem = ({ href, icon: Icon, size }) => (
    <a
      href={href}
      className="cursor-auto p-2 h-9 w-9 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-neutral-500"
    >
      <Icon size={size} className="text-white" />
    </a>
  );
  
  export default SocialItem;