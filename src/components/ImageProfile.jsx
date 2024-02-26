import React from "react";

const ImageProfile = ({ srcImg, styleImg }) => {
  return <img src={srcImg} alt="Profile-image" className={styleImg} />;
};

export default ImageProfile;
