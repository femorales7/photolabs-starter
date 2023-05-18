import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="photo-list--fav-icon">
      <div className={`photo-list--fav-icon-svg `} onClick={handleClick}>
      <FavIcon width={20} height={17} fill={active ? '#C80000' : '#EEEEEE'} outlineWidth={2} stroke="#C80000" />
      </div>
    </div>
  );
}

export default PhotoFavButton;