import React from 'react';

const Like = ({ catId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(catId, 'ADD_TO_LIKED_USERS')}
  >
    <img src="images/misc/like.png" alt="Like User" />
  </button>
);

export default Like;
