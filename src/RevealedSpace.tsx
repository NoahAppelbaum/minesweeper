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
        if (val === -1) return "💣";
        return "";
    }

    //TODO: get some art! :)
    return (
        <div className="RevealedSpace" onContextMenu={(evt) => {evt.preventDefault()}}>
            {getRevealItem()}
        </div>
    )
}

export default RevealedSpace;
