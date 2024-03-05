import "./stylesheets/RevealedSpace.css"

interface RevealedSpacePropsInterface {
    val: number;
}

/** RevealedSpace
 * a space on a minesweeper board, which has been revealed
 * props:
 *  - val, the value displayed on the space
 *
 * Game -> RevealedSpace
 */


function RevealedSpace ({val}: RevealedSpacePropsInterface) {


    function getRevealItem (): string {
        if (val > 0) return String(val);
        return "";
    }

    return (
      <div
        className="RevealedSpace"
        onContextMenu={(evt) => {
          evt.preventDefault();
        }}
        style={
          val <= 4
            ? {
                backgroundImage: `url(${val}.png)`,
                backgroundSize: "contain"
                // backgroundColor: "lightgreen",
              }
            : {}
        }
      >
        {getRevealItem()}
      </div>
    );
}

export default RevealedSpace;
