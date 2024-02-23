import React from "react";
import SpotifyLogoImg from "../../public/Spotify_Logo_CMYK.png";
const SpotifyLogo = () => {
  return (
    <img
      src={SpotifyLogoImg}
      alt="Spotify Logo"
      className="cursor-pointer"
      style={{ maxWidth: "80px", height: "auto" }}
    />
  );
};

export default SpotifyLogo;
