import React, { useLayoutEffect } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  id,
  username,
  imageSource,
  isFavourite,
  toggleFavourite,
  handleModale,
  photoProfile
}) => {
  console.log("Photo Profile", photoProfile);
  /* Insert React */

  return (
    <div className="photo-list--item">
      <div>
        <PhotoFavButton
          isFavourite={isFavourite}
          toggleFavourite={() => toggleFavourite(id)}
        />

        <img
          className="photo-list--image"
          src={imageSource}
          alt="Photo"
          onClick={handleModale}
        />
        <div className="photo-list--user-details">
          <img
            className="photo-list--user-profile"
            src={photoProfile}
            alt="Photo"
           
          />
          <h1 className=" photo-list--user-info ">
            {username}
          </h1>
          {/* <h1>{id}</h1> */}
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
