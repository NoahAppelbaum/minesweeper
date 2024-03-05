import { useState } from "react";

import Game from "./Game";
import ScorePage from "./ScorePage";
import HeaderBar from "./HeaderBar";
import "./stylesheets/App.css";
import GameContext from "./GameContext";

const initialSettings = {
  size: 8,
  nMines: 10,
};

function App() {
  const [gameSettings, setGameSettings] = useState(initialSettings);
  const [gameState, setGameState] = useState("ACTIVE");

  let score = 0;
  function setScore(secs: number): void {
    score = secs;
    console.log("the score is:", score);
  }

  if (gameState === "WINNING") {
    setTimeout(()=>{
      setGameState("WON");
    }, 10);
  }


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
