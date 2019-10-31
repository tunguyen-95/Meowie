import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cat from './components/Cat';
import Lonely from './components/Lonely';
import data from './data.json';

const App = () => {
  const [cat, setCat] = useState(data);
  const [likedCats, setLikedCats] = useState([]);
  const [superLikedCats, setSuperLikedCats] = useState([]);
  const [dislikedCats, setDislikedCats] = useState([]);
  const activeCat = 0;

  const removedCatFromDataSrc = (catSource, catId) =>
    catSource.filter(cat => cat.id !== catId);

  const modifySuperficialChoices = (catId, action) => {
    const newCat = [...cat];
    const newLikedCats = [...likedCats];
    const newSuperLikedCats = [...superLikedCats];
    const newDislikedCats = [...dislikedCats];

    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!cat[activeCat].likedCats.includes(catId)) {
          newCat[activeCat].likedCats.push(catId);
          newLikedCats.push(data[catId]);

          setLikedCats(newLikedCats);
          setCat(removedCatFromDataSrc(cat, catId));
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!cat[activeCat].dislikedCats.includes(catId)) {
          newCat[activeCat].dislikedCats.push(catId);
          newDislikedCats.push(data[catId]);

          setDislikedCats(newLikedCats);
          setCat(removedCatFromDataSrc(cat, catId));
        }
        break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if (!cat[activeCat].superLikedCats.includes(catId)) {
          newCat[activeCat].superLikedCats.push(catId);
          newSuperLikedCats.push(data[catId]);

          setSuperLikedCats(newSuperLikedCats);
          setCat(removedCatFromDataSrc(cat, catId));
        }
        break;
      default:
        return cat;
    }
  };

  return (
    <div className="app">
      <Header />
      {cat[1] ? (
        <Cat
          key={cat[1].id}
          cat={cat[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedCats={likedCats}
        />
      ) : (
        <Lonely
          activeCatImage={cat[activeCat].image}
          likedCats={likedCats}
          superLikedCats={superLikedCats}
        />
      )}
    </div>
  );
};

export default App;
