import { useState } from "react";

import Game from "./Game";
import ScorePage from "./ScorePage";
import HeaderBar from "./HeaderBar";
import "./stylesheets/App.css";
import GameContext from "./GameContext";

const initialSettings = {
  size: 4,
  nMines: 1,
};

function App() {
  const [gameSettings, setGameSettings] = useState(initialSettings);
  const [gameState, setGameState] = useState("ACTIVE");
  const [score, setScore] = useState(0)


  /*TODO: Make a state for gameState here. It can be ACTIVE, PAUSED, WON, or LOST.
  This can be passed/drilled as needed to trigger warnings, and passed back up via callbacks */

  //TODO: fn(s) for changing settings
  return (
    <GameContext.Provider value={gameState}>
      <div className="App">
        <HeaderBar setScore={setScore} />
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
