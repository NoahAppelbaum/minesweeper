import { useState } from "react";

import Game from "./Game";
import ScorePage from "./ScorePage";
import HeaderBar from "./HeaderBar";
import "./stylesheets/App.css";
import GameContext from "./GameContext";
import SettingsForm from "./SettingsForm";
import About from "./About";

const initialSettings = {
  size: 8,
  nMines: 10,
};

function App() {
  const [gameSettings, setGameSettings] = useState(initialSettings);
  const [gameState, setGameState] = useState("SETTINGS");
  const [score, setScore] = useState(0)

  function startGame(newSettings:{size: number, nMines: number}):void {
    if(newSettings) {
      setGameSettings(newSettings);
    }
    setScore(0);
    setGameState("ACTIVE");
  }

  /*TODO: Make a state for gameState here. It can be ACTIVE, PAUSED, WON, or LOST.
  This can be passed/drilled as needed to trigger warnings, and passed back up via callbacks */

  //TODO: fn(s) for changing settings
  return (
    <GameContext.Provider value={gameState}>
      <div className="App">
        <HeaderBar setScore={setScore} setGameState={setGameState} />
        {gameState === "SETTINGS" && (
          <SettingsForm startGame={startGame} />
        )}
        {gameState === "ABOUT" && (
          <About setGameState={setGameState}/>
        )}
        {gameState === "ACTIVE" && (
          <Game
            size={gameSettings.size}
            nMines={gameSettings.nMines}
            setGameState={setGameState}
          />
        )}
        {gameState === "WON" && <ScorePage newScoreSeconds={score} />}
      </div>
    </GameContext.Provider>
  );
}

export default App;
/*
FIXME:
there's a variable that holds the seconds elapsed for endgame here -- declared, then initialized on gamewin
a callback from Game sets the state to WON and sets that value^
...which it gets from timer... how?
*/
