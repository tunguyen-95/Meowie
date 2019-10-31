import React from 'react';
import './App.css';
import Header from './components/Header';
import Cat from './components/Cat';
import Lonely from './components/Lonely';

function App() {
  return (
    <div className="app">
      <Header />
      <Cat />
      <Lonely />
    </div>
  );
}

export default App;
