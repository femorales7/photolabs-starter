import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const mapPhotos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        id= {photo.id}
        username={photo.username}
        imageSource={photo.imageSource}
        hideUserName={photo.hideUserName}
      />
    );
  });

  return <ul className="photo-list">{mapPhotos}</ul>;
};

PhotoList.defaultProps = {
  photos: [
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: "Emanuel",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
  ],
};

export default PhotoList;
