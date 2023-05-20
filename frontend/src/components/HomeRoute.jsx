import React  from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import useApplicationData from "../hooks/useApplicationData";

const HomeRoute = ({ photos, topics, handleModale , favorites, toggleFavourite }) => {
 

  return (
    <div className="HomeRoute">
      <TopNavigationBar
        topics={topics}
        favouriteCount={favorites.length}
      />
      <PhotoList
        photos={photos}
        favouritePhotos={favorites}
        toggleFavourite={toggleFavourite}
        handleModale={handleModale}
      />
    </div>
  );
};

export default HomeRoute;