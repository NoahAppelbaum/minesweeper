import { useRef, useState, useEffect, useContext } from "react";
import "./stylesheets/Timer.css";
import { getDisplayTime } from "./utils";
import GameContext from "./GameContext";

// interface TimerPropsInterface {
//     timerSeconds: number;
// }
//TODO: Should count ms for actual scoring -- more granular!

/** Timer
 * Times game. Displays remaining time, and performs endgame functions on timeout.
 * props:
 * - timerSeconds -- total [seconds] left in game
 *      *** Pass 0 for untimed game ***
 * - (endgame callback)
 *
 * state: secRemaining -- remaining [seconds] in game
 *
 * Header -> Timer
 */
//TODO: I'm going to need to put something about the timer, fn's or otherwise
//  into context, if I want to pause from rendering other stuff etc. (settings, eg)
function Timer({ setScore }: { setScore: (secs: number) => void }) {
  const timerId = useRef<NodeJS.Timeout | undefined>();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const gameState = useContext(GameContext);
  const [reported, setReported] = useState(false);

  useEffect(() => {
    countup();

    return stopTimer;
  }, []);

  function countup(): void {
    timerId.current = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer(): void {
    clearInterval(timerId.current);
  }

  //report score on game win
  if (gameState === "WON" && !reported) {
    stopTimer();
    console.log("calling setScore with elapsed time", timeElapsed);
    setScore(timeElapsed);
    setReported(true);
  }

  //TODO: need any of this?
  //If no timer:
  // if (timerSeconds === 0) {
  //     clearInterval(timerId.current);
  //     return (
  //         <div className="Timer">
  //             <span>--:--</span>
  //         </div>
  //     )
  // }

  return (
    <div className="Timer">
      <span>{getDisplayTime(timeElapsed)}</span>
    </div>
  );
}

export default Timer;
