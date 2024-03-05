import { useRef, useState, useEffect, useContext } from "react";
import "./stylesheets/Timer.css";
import { getDisplayTime } from "./utils";
import GameContext from "./GameContext";
import { gameTimer } from "./definitions";

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
function Timer({ timerRef }: { timerRef: React.MutableRefObject<gameTimer> }) {
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
      <span>{getDisplayTime(timerRef.current.seconds)}</span>
    </div>
  );
}

export default Timer;
