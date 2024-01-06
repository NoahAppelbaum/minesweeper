import "./stylesheets/BlankSpace.css"

interface BlankSpacePropsInterface {
    coords: [number, number];
    val: number;
    reveal: (val:number, coords:[number,number]) => void;
}

/** BlankSpace
 * An unrevealed board space, clickable to reveal
 * TODO: add flagable
 *
 * Game -> BlankSpace
 */

function BlankSpace ({coords, val, reveal}: BlankSpacePropsInterface) {

    return (
        <div className="BlankSpace" onClick={() => reveal(val, coords)}>

        </div>
    )
}

export default BlankSpace;
