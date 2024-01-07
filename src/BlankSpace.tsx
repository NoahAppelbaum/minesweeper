import { useState } from "react";
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
    const [flagged, setFlagged] = useState(false);

    function handleRightClick (evt): void {
        evt.preventDefault();
        setFlagged(!flagged);
    }

    return (
        <div className="BlankSpace" onClick={() => reveal(val, coords)} onContextMenu={handleRightClick}>
            {flagged && "X"}
        </div>
    )
}

export default BlankSpace;
