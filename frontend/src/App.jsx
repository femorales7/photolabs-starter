import React, { useState, useEffect, useLayoutEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useAplicationData from "./hooks/useApplicationData";

import "./App.scss";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  

  useEffect(() => {
    fetch("/api/photos")
    
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error(error));
  }, []);

  const handleTopicClick = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data => {
        // Update the photos state with the fetched data for the specific topic
        setPhotos(data);
      })
      .catch(error => console.error(error));
  };

  const {
    isModalOpen,
    selectedPhoto,
    handleModale,
    closeModal,
    toggleFavourite,
    favorites,
  } = useAplicationData();
 
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        handleModale={handleModale}
        favorites={favorites}
        toggleFavourite={toggleFavourite}
        onTopicClick={handleTopicClick}
        isModalOpen={isModalOpen}
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
