import { useRef, useState, useEffect } from "react";

import Game from "./Game";
import ScorePage from "./ScorePage";
import HeaderBar from "./HeaderBar";
import "./stylesheets/App.css";
import GameContext from "./GameContext";

import {gameTimer} from "./definitions"

const initialSettings = {
  size: 8,
  nMines: 10,
};

function App() {
  const [gameSettings, setGameSettings] = useState(initialSettings);
  const [gameState, setGameState] = useState("ACTIVE");
  const gameTimer = useRef<gameTimer>({id: undefined, seconds: 0});

  useEffect(() => {
    countup();

    return stopTimer;
  }, []);

  function countup(): void {
    gameTimer.current.id = setInterval(() => {
     gameTimer.current.seconds++;
    }, 1000);
  }

  function stopTimer(): void {
    clearInterval(gameTimer.current.id);
  }

  /*TODO: Make a state for gameState here. It can be ACTIVE, PAUSED, WON, or LOST.
  This can be passed/drilled as needed to trigger warnings, and passed back up via callbacks */

  //TODO: fn(s) for changing settings
  return (
    <GameContext.Provider value={gameState}>
      <div className="App">
        <HeaderBar timerRef={gameTimer} />
        {gameState === "ACTIVE" && (
          <Game
            size={gameSettings.size}
            nMines={gameSettings.nMines}
            setGameState={setGameState}
          />
        )}
        {gameState === "WON" && <ScorePage newScoreSeconds={gameTimer.current.seconds} />}
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
