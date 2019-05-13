import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box/Box';
import Game from './Game/Game';

const App: React.FC = () => {
  return (
    <div className="App">
      <Game></Game>
    </div>
  );
}

export default App;
