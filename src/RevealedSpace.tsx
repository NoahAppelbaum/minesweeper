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

    //TODO: get some art! :)
    return (
        <div className="RevealedSpace">
            {val}
        </div>
    )
}

export default RevealedSpace;
