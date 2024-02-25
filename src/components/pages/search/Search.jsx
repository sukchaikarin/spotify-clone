import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className="w-96 relative">
      <GoSearch
        className="absolute top-[14px] left-[9px] text-gray-400"
        size={20}
      />
      <input
        className="text-sm bg-neutral-800 w-96 p-3 pl-8 rounded-full border-2 hover:border-2 border-transparent   hover:border-white"
        type="search"
        placeholder="What do you want to play?"
      />
    </div>
  );
};

export default Search;
