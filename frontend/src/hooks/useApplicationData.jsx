import { useReducer, useEffect } from "react";

export const ACTIONS = {
  SET_MODAL_OPEN: "SET_MODAL_OPEN",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
};
// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return {
        ...state,
        favorites: [...state.favorites, action.photoId],
      };
    case "FAV_PHOTO_REMOVED":
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.photoId),
      };
    case ACTIONS.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case "ACTIONS.SET_PHOTO_DATA":
      return {
        ...state,
        photoData: action.photoData,
      };
    case "ACTIONS.SET_TOPIC_DATA":
      return {
        ...state,
        topicData: action.topicData,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isPhotoDetailsDisplayed: true,
      };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

export default function useApplicationData() {
  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    favorites: [],
    photoData: [],
    topicData: [],
  };

  // Use reducer hook to manage state

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({ type: "FAV_PHOTO_REMOVED", photoId });
    } else {
      dispatch({ type: "FAV_PHOTO_ADDED", photoId });
    }
  };

  const handleModale = (photo) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: true });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: false });
  };

  useEffect(() => {
    // Fetch initial photo data
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "ACTIONS.SET_PHOTO_DATA", photoData: data });
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Fetch initial topic data
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "ACTIONS.SET_TOPIC_DATA", topicData: data });
      })
      .catch((error) => console.error(error));
  }, []);

  // Return the necessary data and functions

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    handleModale,
    closeModal,
    toggleFavourite,
    favorites: state.favorites,
    photoData: state.photoData,
    topicData: state.topicData,
  };
}
