import Timer from "./Timer"
import "./stylesheets/HeaderBar.css"

interface HeaderBarPropsInterface {
    timerSeconds: number;
    timeoutFn: VoidFunction;
}

//TODO: This needs props for rendered components
/** HeaderBar
 * Component with game title, and UI components for timer and starting a game
 *
 * App -> HeaderBar -> {TODO: Components}
 */

function HeaderBar ({timerSeconds, timeoutFn}: HeaderBarPropsInterface) {

    return (
        <div className="HeaderBar">
            {/* TODO: size-change button(s) */}
            <span>MINESWEEPA'</span>
            {/* TODO: restart button (refresh symbol?) */}
            <Timer timerSeconds={timerSeconds} timeoutFn={timeoutFn}/>
        </div>
    )
}

export default HeaderBar
