import React, { useState, useEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useAplicationData from "./hooks/useApplicationData";

import "./App.scss";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  console.log('photos',photos);

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
  console.log('photos',photos);
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        handleModale={handleModale}
        favorites={favorites}
        toggleFavourite={toggleFavourite}
        onTopicClick={handleTopicClick}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          handleModale={handleModale}
          favorites={favorites}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
