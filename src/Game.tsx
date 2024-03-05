import { useState, useEffect } from "react";
import { makeBoard, splashFlipZeroes, revealAll, placeMines } from "./utils";

import RevealedSpace from "./RevealedSpace";
import BlankSpace from "./BlankSpace";
import "./stylesheets/Game.css"

interface GamePropsInterface {
    size: number
    nMines: number
    setGameState: (state: string) => void;
}

/** Game
A game of Minesweeper, which has game state
props: size:integer, nMines:integer
state:
    - board -- The gameboard; a matrix of BoardSpaces which contain:
        - val: number, value of space (-1 for mines, otherwise adjacent/touching mines)
        - coords: [number, number], y/x coordinates of space
        - revealed: 0 | 1, whether the space has been revealed
    - gameActive -- Whether the current game is active/ongoing

App->Game->{ BlankSpace, RevealedSpace } */
function Game({size, nMines, setGameState}: GamePropsInterface) {
    const [board, setBoard] = useState(makeBoard(size, nMines));
    const [gameActive, setGameActive] = useState(true);
    const [armed, setArmed] = useState(false);

    useEffect(() => {
        if (gameActive) checkWin();
    })

    function revealSpace (val: number, coords: [number, number]): void {
        const [y, x] = coords;

        if (!armed) {
            placeMines(board, nMines, board[y][x]);
            setArmed(true);
        }

        if (val === -1) {
            loseGame();
        }
        else if (val === 0) {
            setBoard(
                prev => {
                    const current = [...prev];
                    splashFlipZeroes(current[y][x]);
                    return current;
            })
        }
        else {
            setBoard(
                prev => {
                    const current = [...prev];
                    current[y][x].revealed = 1;
                    return current;
            });
        }

    }

    function checkWin (): void {
        if (board.every(row => row.every(space => space.val === -1 || space.revealed))) {
            winGame();
        }
    }


    //TODO: prompt restart
    function winGame (): void {
        setBoard(prev => revealAll(prev));
        console.log("winning the game");
        setGameState("WINNING");
        setGameActive(false);
    }

    function loseGame ():void {
        alert("You Lost!");
        setBoard(prev => revealAll(prev));
        setGameActive(false);
    }

    //TODO: Make SpaceRow its own component. It will solve a lot of tortuous mapping! And better for styling.
    return (
        <div className="Game">
            {board.map((row, y) => (
                <div className="SpaceRow" key={y}>
                {row.map((space, x) => {
                    if (space.revealed) {
                        return <RevealedSpace val={space.val} key={x} />
                    }
                    else {
                        return <BlankSpace coords={space.coords} val={space.val} reveal={revealSpace} key={x} />
                    }
                })}
                </div>
            ))}
        </div>
    )
}

export default Game;
