import React from "react";

import "../styles/TopNavigationBar.scss";

import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import SearchBar from "./SearchBar";
const TopNavigation = ({
  topics,
  favouriteCount,
  handleSearch,
  onTopicClick,
}) => {
  const redirect = () => {
    window.location.href = "http://localhost:3000/"; // Redirect to the desired URL
  };
  return (
    <div className="top-nav-bar">
      <span href="/" onClick={redirect} className="top-nav-bar--logo">PhotoLabs</span>
      <SearchBar onSearch={handleSearch} />
      <TopicList topics={topics} onTopicClick={onTopicClick} />

      {/* set the icon with notification when has a new like in some photo */}
      <FavBadge isFavPhotoExist={favouriteCount > 0 ? true : false} />
    </div>
  );
};

export default TopNavigation;
