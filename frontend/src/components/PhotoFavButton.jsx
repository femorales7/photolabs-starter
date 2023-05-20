import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavourite, toggleFavourite }) {
 
  console.log("im in PhotoFavButton");
  
  return (
    <div className="photo-list--fav-icon">
      <div className={`photo-list--fav-icon-svg `}  onClick={toggleFavourite}>
      <FavIcon width={25} height={18} fill={isFavourite ? '#C80000' : '#EEEEEE'} outlineWidth={2} stroke="#C80000" />
      </div>
    </div>
  );
}

export default PhotoFavButton;