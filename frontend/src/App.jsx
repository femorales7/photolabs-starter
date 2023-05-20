import React, { useState } from "react";

import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useAplicationData from "./hooks/useApplicationData";
import photos from "./mocks/photos.js";
import topics from "./mocks/topics.js";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
const {isModalOpen, selectedPhoto, handleModale, closeModal, toggleFavourite, favorites} = useAplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        handleModale={handleModale}
        favorites={favorites}
        toggleFavourite={toggleFavourite}
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
