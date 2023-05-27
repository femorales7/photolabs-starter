import React, { useLayoutEffect } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  id,
  username,
  location,
  imageSource,
  isFavourite,
  toggleFavourite,
  handleModale,
  photoProfile,
  classNamePhotoListItem,
}) => {
  /* Insert React */
  /* Apply default class name if not provided */

  if (classNamePhotoListItem !== "photo-list-modal--image") {
    classNamePhotoListItem = "photo-list--image ";
  }
  return (
    <div className="photo-list--item">
      <div>
        <PhotoFavButton
          isFavourite={isFavourite}
          toggleFavourite={() => toggleFavourite(id)}
        />

        <img
          className={classNamePhotoListItem}
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
          <div className="photo-list--user-details_letters">
            <h1 className=" photo-list--user-info ">{username}</h1>
            <h1 className="photo-list--user-location ">
              {location.city}, {location.country}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
// Set default props
PhotoListItem.defaultProps = {
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
