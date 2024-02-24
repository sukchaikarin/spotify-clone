import React from "react";
import SpotifyLogoImg from "/Spotify_Logo_CMYK.png";
const SpotifyLogo = ({ logoClassName, logoStyle }) => {
  return (
    <img
      src={SpotifyLogoImg}
      alt="Spotify Logo"
      className={logoClassName}
      style={logoStyle}
    />
  );
};

export default SpotifyLogo;
