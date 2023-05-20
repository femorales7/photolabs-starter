import { useState, useEffect } from 'react';

export default function useApplicationData() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleModale = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFavourite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };

  return {
    isModalOpen,
    selectedPhoto,
    handleModale,
    closeModal,
    toggleFavourite,
    favorites
  }

}