import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addplaylist } from "../../../store/playlistsSlice";
const spotifyClient_ID = "93049660117b47258f4e1d013d95619d";
const spotifyClient_Secret = "b7fb5e718f8f4d3e8ebf492869284c76";

const Search = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          `grant_type=client_credentials&client_id=${spotifyClient_ID}&client_secret=${spotifyClient_Secret}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const accessToken = response.data.access_token;
        setAccessToken(accessToken);

        const playlistResponse = await axios.get(
          `https://api.spotify.com/v1/search?q=taylor&type=playlist`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + accessToken,
            },
          }
        );

        dispatch(addplaylist(playlistResponse.data));
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchData();
  }, []);

  // Search
  const search = async (searchQuery) => {
    console.log(`Search for ${searchQuery}`);

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          searchQuery || "taylor"
        )}&type=playlist`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      dispatch(addplaylist(response.data));
      //console.log(response.data); // Display the result in the console
    } catch (error) {
      console.error("Error searching for artist:", error);
    }
  };

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
        onChange={(e) => {
          setSearchInput(e.target.value);
          search(e.target.value); // Call search with the updated search input
        }}
      />
    </div>
  );
};

export default Search;
