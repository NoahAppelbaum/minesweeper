import Timer from "./uicomponents/Timer";
import JocelynFace from "./uicomponents/JocelynFace";
import "./stylesheets/HeaderBar.css";
import AboutButton from "./uicomponents/AboutButton";

//TODO: This needs props for rendered components
/** HeaderBar
 * Component with game title, and UI components for timer and starting a game
 *
 * App -> HeaderBar -> {TODO: Components}
 */

function HeaderBar({
  setScore,
  setGameState,
}: {
  setScore: (secs: number) => void;
  setGameState: (state: string) => void;
}) {
  return (
    <div className="HeaderBar">
      {/* TODO: size-change button(s) */}
      <h1 className="logo">Jocelyn Sweeper</h1>
      <JocelynFace />
      <div className="HeaderBar-items">
        <Timer setScore={setScore} />
        {/*TODO: inline-block'd info button and refresh(restart) button */}
        <div className="HeaderBar-buttons">
          <AboutButton setGameState={setGameState} />
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
