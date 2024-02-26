import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
const spotifyClient_ID = "93049660117b47258f4e1d013d95619d";
const spotifyClient_Secret = "b7fb5e718f8f4d3e8ebf492869284c76";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${spotifyClient_ID}&client_secret=${spotifyClient_Secret}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // Search
  async function search() {
    console.log(`Seacrh for ${searchInput}`);
    // GEt request using search to get the Artist ID
    var artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
      artistParameters
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

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
        onKeyUp={() => search()}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
