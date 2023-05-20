import React from "react";
import PhotoList from "../components/PhotoList";
import HomeRoute from "../components/HomeRoute";


import "../styles/PhotoDetailsModal.scss";

 const PhotoDetailsModal = ({
  closeModal,
  selectedPhoto,  
  handleModale,
  favorites,
  toggleFavourite
}) => {
 
  console.log("this select photo", selectedPhoto);
  const similarPhotos = Object.values(selectedPhoto.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal--close-button"
        onClick={closeModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <PhotoList
        className="photo-details-modal--image"
        photos={[selectedPhoto]}
        favouritePhotos={favorites}
        toggleFavourite={toggleFavourite}
        handleModale={handleModale}
      />
      <div className="photo-details-modal--header">Similar Photos</div>
      <PhotoList
        photo-details-modal--images
        photos={similarPhotos}
        favouritePhotos={favorites}
        toggleFavourite={toggleFavourite}
        handleModale={handleModale}
      />
    </div>
  );
};

export default PhotoDetailsModal;
