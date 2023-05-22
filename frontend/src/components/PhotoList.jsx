import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  favouritePhotos,
  toggleFavourite,
  handleModale,
  classNamePhotoListItem,
}) => {
  
  // make a map of photos objet

  const mapPhotos = photos.map((photo) => {
    const { id, user, urls } = photo;


    return (
      <PhotoListItem
        key={id}
        id={id}
        username={user.username}
        photoProfile={user.profile}
        imageSource={urls.regular}
        hideUserName={user.name}
        isFavourite={favouritePhotos && favouritePhotos.includes(id)}
        toggleFavourite={toggleFavourite}
        handleModale={() => handleModale(photo)}
        classNamePhotoListItem={classNamePhotoListItem}
      />
    );
  });
 // Render the list of photos with corresponding data
  return <ul className="photo-list">{mapPhotos}</ul>;
};

export default PhotoList;
