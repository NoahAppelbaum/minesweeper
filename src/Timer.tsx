import { useRef, useState, useEffect } from "react";
import "./stylesheets/Timer.css";

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

function Timer () {
    const timerId = useRef<NodeJS.Timeout | undefined>();
    const [timeElapsed, setTimeElapsed] = useState(0)

    useEffect (() => {
            countup();

            return stopTimer;
        }, [])

    function countup(): void {
        timerId.current = setInterval(
            () => {setTimeElapsed(prev => prev + 1)},
            1000);
    }

    function stopTimer(): void {
        clearInterval(timerId.current);
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

    function getDisplayTime (): string {
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;

        const strMinutes = minutes < 10 ? "0" + String(minutes) : String(minutes);
        const strSeconds = seconds < 10 ? "0" + String(seconds) : String(seconds);

        //TODO: fancier clock display?
        return strMinutes + ":" + strSeconds;
    }

    return (
        <div className="Timer">
            <span>{getDisplayTime()}</span>
        </div>
    )

}

export default Timer;
