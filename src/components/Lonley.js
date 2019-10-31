import React from 'react';
import LikedCat from './LikedCat';

const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => (
  <div id="lonely">
    <p>It seems there 's no cutie around here'.</p>

    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="You..." />
    </span>

    <div id="liked-cat">
      <p>{likedUsers.length > 0 ? "let's hope they like you too!" : ''}</p>

      {likedUsers.map(item => (
        <LikedCat key={item.id} cat={item} />
      ))}

      <p>
        {superLikedUsers.length > 0 ? 'The ones that you super liked!' : ''}
      </p>

      {superLikedUsers.map(item => (
        <LikedCat key={item.id} cat={item} />
      ))}
    </div>
  </div>
);

export default Lonely;
