import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';

const Actions = ({ cat, modifySuperficialChoices }) => (
  <div id="actions">
    <Rewind catId={cat.id} />
    <Dislike
      catId={cat.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like catId={cat.id} modifySuperficialChoices={modifySuperficialChoices} />
    <Superlike
      catId={cat.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
  </div>
);

export default Actions;
