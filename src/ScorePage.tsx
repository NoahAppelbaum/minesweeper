import { useState, useEffect } from "react";
import { getDisplayTime } from "./utils";

import "./stylesheets/ScorePage.css";

const ARR10 = [0,1,2,3,4,5,6,7,8,9,10];
//TODO: MS???!
//TODO: will have to update and have separate categories for diff difficulties.
//      `localStorage.getItem(`highScores${difficulty}`)`
//      OR in json obj have big/med/small array properties <----**
interface ScorePagePropsInterface {
  newScoreSeconds: number;
}
//FIXME: OK THIS WORKS NOW, BUUUUT only do the logic if score isn't 0
function ScorePage({ newScoreSeconds }: ScorePagePropsInterface) {
  console.log("score page got passed", newScoreSeconds);
  // const [scores, setScores] = useState(
  //   localStorage.getItem("highScores") || new Array<number>()
  // );
  // const [newEntry, setNewEntry] = useState<number | null>(null);

  // useEffect(() => {
  //   let newScores: string | number[];
  //   if (typeof scores === "string") newScores = JSON.parse(scores).scores;
  //   else newScores = [...scores];

  //   if (typeof newScores === "object") {
  //     for (let i = 0; i < newScores.length; i++) {
  //       if (newScoreSeconds < newScores[i]) {
  //         setNewEntry(i);
  //         newScores.splice(i, 0, newScoreSeconds);
  //       }
  //     }
  //   }

  //   setScores(newScores);
  //   //TODO: account for difficulties here too, if implementing
  //   localStorage.setItem("highScores", JSON.stringify({ scores: newScores }));
  // }, []);

  // return (
  //   <div className="ScorePage">
  //     <h2>{getDisplayTime(newScoreSeconds)}</h2>
  //     <ol className="ScorePage-scores">
  //       {ARR10.map(n => {
  //         return (
  //           <li key={n} className={n === newEntry ? "new-entry" : ""}>
  //             {scores[n] ? scores[n] : "-"}
  //           </li>
  //         );
  //       })}
  //     </ol>
  //   </div>
  // );

  return <h2>{getDisplayTime(newScoreSeconds)}</h2>;
}

export default ScorePage;
