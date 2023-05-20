import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({photos, favouritePhotos, toggleFavourite, handleModale }) => {
  console.log("This is the Photo", photos);
console.log("im in Photolist")
  const mapPhotos = photos.map((photo) => {
 
    const {id, user, urls} = photo;

    console.log("profile",user.profile)
 
  
    
    return (
      <PhotoListItem
        key={id}
        id= {id}
        username={user.username}
        photoProfile={user.profile}
        imageSource={urls.regular}
        hideUserName={user.name }
        isFavourite={favouritePhotos && favouritePhotos.includes(id)} 
        toggleFavourite={toggleFavourite}
        handleModale ={() => handleModale(photo)}
      />
      
    );
  });

  return <ul className="photo-list">{mapPhotos}</ul>;
};



export default PhotoList;
