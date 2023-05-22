import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({photos, favouritePhotos, toggleFavourite, handleModale , classNamePhotoListItem}) => {
  
  const mapPhotos = photos.map((photo) => {
 
    const {id, user, urls} = photo;

    
 
  
    
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
        classNamePhotoListItem={classNamePhotoListItem}
      />
      
    );
  });

  return <ul className="photo-list">{mapPhotos}</ul>;
};



export default PhotoList;
