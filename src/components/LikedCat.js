import React from 'react';

const LikedCat = ({ cat }) => (
  <div className="liked-cat">
    <div className="liked-cat-image">
      <img src={`/images/kitten/${cat.image}`} alt={`You liked ${cat.name}`} />
    </div>
  </div>
);

export default LikedCat;
