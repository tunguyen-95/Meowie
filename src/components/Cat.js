import React from 'react';
import Actions from './Actions';

const Cat = ({ cat, modifySuperficialChoices }) => {
  const { name, desc, age, image } = cat;

  return (
    <>
      <div className="cat">
        <div className="cat-photo">
          <img src={`/images/kitten/${image}`} alt={name} />
        </div>

        <div className="cat-description">
          <p className="cat-name-age">
            {name}, <span>{age}</span>
          </p>
          <p className="cat-info">{desc}</p>
        </div>
      </div>

      <Actions cat={cat} modifySuperficialChoices={modifySuperficialChoices} />
    </>
  );
};

export default Cat;
