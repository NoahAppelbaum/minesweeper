import Timer from "./Timer";
import JocelynFace from "./JocelynFace";
import "./stylesheets/HeaderBar.css";

//TODO: This needs props for rendered components
/** HeaderBar
 * Component with game title, and UI components for timer and starting a game
 *
 * App -> HeaderBar -> {TODO: Components}
 */

function HeaderBar({ setScore }: { setScore: (secs: number) => void }) {
  return (
    <div className="HeaderBar">
      {/* TODO: size-change button(s) */}
      <h1 className="logo">Jocelyn Sweeper</h1>
      <JocelynFace />
      <div className="HeaderBar-items">
        <Timer setScore={setScore} />
        {/*TODO: inline-block'd info button and refresh(restart) button */}
      </div>
    </div>
  );
}

export default HeaderBar;
