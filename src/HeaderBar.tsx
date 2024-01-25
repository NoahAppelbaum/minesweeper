import Timer from "./Timer"
import JocelynFace from "./JocelynFace"
import "./stylesheets/HeaderBar.css"




//TODO: This needs props for rendered components
/** HeaderBar
 * Component with game title, and UI components for timer and starting a game
 *
 * App -> HeaderBar -> {TODO: Components}
 */

function HeaderBar () {

    return (
        <div className="HeaderBar">
            {/* TODO: size-change button(s) */}
            <span>Jocelyn Sweeper</span>
            <JocelynFace />
            {/* TODO: restart button (refresh symbol?) */}
            <Timer />
        </div>
    )
}

export default HeaderBar
