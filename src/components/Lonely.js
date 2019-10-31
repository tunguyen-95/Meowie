import React from 'react';
import LikedCat from './LikedCat';

const Lonely = ({ activeCatsImage, likedCats, superLikedCats }) => (
  <div id="lonely">
    <p>It seems there 's no cutie around here'.</p>

    <span className="pulse">
      <img src={`/images/users/${activeCatsImage}`} alt="You..." />
    </span>

    <div id="liked-cat">
      <p>{likedCats.length > 0 ? "let's hope they like you too!" : ''}</p>

      {likedCats.map(item => (
        <LikedCat key={item.id} cat={item} />
      ))}

      <p>{superLikedCats.length > 0 ? 'The ones that you super liked!' : ''}</p>

      {superLikedCats.map(item => (
        <LikedCat key={item.id} cat={item} />
      ))}
    </div>
  </div>
);

export default Lonely;
