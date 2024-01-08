import { useState, useEffect } from "react";
import { makeBoard, splashFlipZeroes } from "./utils";

import RevealedSpace from "./RevealedSpace";
import BlankSpace from "./BlankSpace";
import "./stylesheets/Game.css"

interface GamePropsInterface {
    size: number
    nMines: number
}

/** Game
A game of Minesweeper, which has game state
props: size:integer, nMines:integer
state: board -- The gameboard; a matrix of BoardSpaces which contain:
    - val: number, value of space (-1 for mines, otherwise adjacent/touching mines)
    - coords: [number, number], y/x coordinates of space
    - revealed: 0 | 1, whether the space has been revealed

App->Game->{ BlankSpace, RevealedSpace } */
function Game({size, nMines}: GamePropsInterface) {
    const [board, setBoard] = useState(makeBoard(size, nMines));

    //TODO: better time/way to check for win?
    useEffect(() => checkWin())

    function revealSpace (val: number, coords: [number, number]): void {
        const [y, x] = coords;

        if (val === -1) {
            //TODO: Some consequences! ...and reveal rest of board?
            alert("You Lost!");
            //TODO: Prompt restart instead of returning here
            return;
        }
        else if (val === 0) {
            setBoard(
                prev => {
                    const current = [...prev];
                    splashFlipZeroes(current[y][x]);
                    return current;
            })
        }
        else setBoard(
            prev => {
                const current = [...prev];
                current[y][x].revealed = 1;
                return current;
        });
    }

    //TODO: do a win thing.
    function checkWin (): void {
        if (board.every(row => row.every(space => space.val === -1 || space.revealed))) {
            alert("You Won!");
        }
    }

    //TODO: Make SpaceRow its own component. It will solve a lot of tortuous mapping! And better for styling.
    return (
        <div className="Game">
            {board.map(row => (
                <div className="SpaceRow">
                {row.map(space => {
                    if (space.revealed) {
                        return <RevealedSpace val={space.val} />
                    }
                    else {
                        return <BlankSpace coords={space.coords} val={space.val} reveal={revealSpace} />
                    }
                })}
                </div>
            ))}
        </div>
    )
}

export default Game;
