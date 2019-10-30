import React from 'react';

const SuperLike = ({ catId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(catId, 'ADD_TO_SUPERLIKED_USERS')}
  >
    <img src="images/misc/superlike.png" alt="Superlike User" />
  </button>
);

export default SuperLike;
