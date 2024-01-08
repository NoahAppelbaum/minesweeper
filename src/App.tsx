import { useState } from 'react';

import Game from './Game';
import HeaderBar from './HeaderBar';
import "./stylesheets/App.css";

const initialSettings = {
  size: 8,
  nMines: 10,
  seconds: 60
}

function App() {
  const [gameSettings, setGameSettings] = useState(initialSettings)

  //TODO: fn(s) for changing settings

  return (
    <div className='App'>
      <HeaderBar timerSeconds={gameSettings.seconds} />
      <Game size={gameSettings.size} nMines={gameSettings.nMines} />
    </div>
  )
}

export default App
