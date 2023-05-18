import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  
  return (
    <div className="photo-list--item">
      
      <div>
      <PhotoFavButton/>
        <img src={props.imageSource} alt="Photo" />
        
      </div>
      <div>
        <h2>username: {props.username}</h2>
        <h2>id: {props.id}</h2>
        <h2>Hide Username: {props.hideUserName}</h2>
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
