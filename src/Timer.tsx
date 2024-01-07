import { useRef, useState, useEffect } from "react";
import "./stylesheets/Timer.css";

interface TimerPropsInterface {
    timerSeconds: number
}
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

function Timer ({timerSeconds}: TimerPropsInterface) {
    const timerId = useRef<NodeJS.Timeout | undefined>();
    const [secRemaining, setSecRemaining] = useState(timerSeconds);

    useEffect (function countdown() {
        timerId.current = setInterval(
            () => setSecRemaining(s => s - 1),
            1000);

            return (() => clearInterval(timerId.current));
        }, [])

    //If no timer:
    if (timerSeconds === 0) {
        clearInterval(timerId.current);
        return (
            <div className="Timer">
                <span>--:--</span>
            </div>
        )
    }

    if (secRemaining === 0){
        //TODO: Need to pass this a callback to end game on timeout
        clearInterval(timerId.current);
        alert("Timeout!")
    }

    function getDisplayTime (): string {
        const minutes = Math.floor(secRemaining / 60);
        const seconds = secRemaining % 60;

        //TODO: fancier clock display?
        return `${minutes}:${seconds}`;
    }

    return (
        <div className="Timer">
            <span>{getDisplayTime()}</span>
        </div>
    )

}

export default Timer;
