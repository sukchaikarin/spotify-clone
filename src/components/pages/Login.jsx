import React, { useEffect, useState } from "react";
import SpotifyLogo from "../SpotifyLogo";

const test = "http://localhost:5173/member";
const production = "https://spotify-clone-ten-beta.vercel.app/member";

const Login = () => {
  const handleClick = () => {
    const clientId = "93049660117b47258f4e1d013d95619d"; //your client id
    const redirectUrl = test;
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  const logoClassName = "cursor-pointer";
  const logoStyle = { maxWidth: "107px", height: "auto" };
  return (
    <div className="flex flex-col items-center h-full justify-between  overflow-y-none">
      <div className=" h-[94px] p-8 w-full">
        <SpotifyLogo logoClassName={logoClassName} logoStyle={logoStyle} />
      </div>
      <div className=" flex flex-col px-8 h-full gap-[40px]  justify-between w-[733px]">
        <h1 className="font-bold h-[95px] text-center text-[42px] leading-none  text-white ">
          Log in to Spotify
        </h1>
        <div className="grow flex flex-col h-96 gap-1 justify-center items-center">
          <button
            className="font-bold text-black my-10 w-1/2 bg-green-500 p-8 rounded-full"
            onClick={handleClick}
          >
            Connect Spotify
          </button>
        </div>
      </div>
      <div className="h-[77px] flex justify-center items-center text-center text-xs w-full">
        <p className="bg-black w-full mx-12">
          This site is protected by reCAPTCHA and the Google
          <br />
          Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default Login;
