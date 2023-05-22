import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, favouriteCount}) => {
 
  

  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics ={topics}/>
      <FavBadge isFavPhotoExist={favouriteCount > 0 ? true : false}/>
    </div>
  )
}

export default TopNavigation;