import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import useApplicationData from "../hooks/useApplicationData";

const HomeRoute = ({
  photos,
  topics,
  handleModale,
  favorites,
  toggleFavourite,
  handleSearch,
  onTopicClick,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favouriteCount={favorites.length}
        handleSearch={handleSearch}
        onTopicClick={onTopicClick}
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
