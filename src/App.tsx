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
  /*TODO: Make a state for gameState here. It can be ACTIVE, PAUSED, WON, or LOST.
  This can be passed/drilled as needed to trigger warnings, and passed back up via callbacks */

  //TODO: fn(s) for changing settings
  //FIXME: Timeout fn callback passing knot
  return (
    <div className='App'>
      <HeaderBar timerSeconds={gameSettings.seconds} timeoutFn={()=>{alert("Timeout!")}}/>
      <Game size={gameSettings.size} nMines={gameSettings.nMines} />
    </div>
  )
}

export default App
