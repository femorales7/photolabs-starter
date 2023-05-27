import React, { useState, useEffect, useLayoutEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
import SearchBar from "./components/SearchBar";

import "./App.scss";

const App = () => {
  const {
    isModalOpen,
    selectedPhoto,
    handleModale,
    closeModal,
    toggleFavourite,
    favorites,
    photoData,
    topicData,
  } = useApplicationData();

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    setPhotos(photoData);
    setFilteredPhotos(photoData);
  }, [photoData]);

  useEffect(() => {
    setTopics(topicData);
  }, [topicData]);

  const handleTopicClick = (topicId) => {
    console.log("topicId", topicId)
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the photos state with the fetched data for the specific topic
        setPhotos(data);
        setFilteredPhotos(data);
      })
      .catch((error) => console.error(error));
  };

  const handleSearch = (searchTerm) => {
    const filtered = photos.filter((photo) => {
      const { city, country } = photo.location;
      console.log("photo", city, country);
      return (
        city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredPhotos(filtered);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={filteredPhotos}
        topics={topics}
        handleModale={handleModale}
        favorites={favorites}
        toggleFavourite={toggleFavourite}
        onTopicClick={handleTopicClick}
        isModalOpen={isModalOpen}
        handleSearch={handleSearch}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          handleModale={handleModale}
          favorites={favorites}
          toggleFavourite={toggleFavourite}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default App;
