import { getDisplayTime } from "./utils";

import "./stylesheets/ScorePage.css";

const ARR10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//TODO: MS???!
//TODO: will have to update and have separate categories for diff difficulties.
//      `localStorage.getItem(`highScores${difficulty}`)`
//      OR in json obj have big/med/small array properties <----**
interface ScorePagePropsInterface {
  newScoreSeconds: number;
}

/** ScorePage
 * Lists high scores and fetches/assigns high score data from localStorage
*/
function ScorePage({ newScoreSeconds }: ScorePagePropsInterface) {
  console.log("score page got passed", newScoreSeconds);
  const storedScores = localStorage.getItem("highScores");
  const scores: number[] = storedScores
    ? JSON.parse(storedScores).scores
    : new Array<number>();
  let newEntry: null | number = null;

  if (newScoreSeconds > 0) {
    for (let i = 0; i < 10; i++) {
      if (newScoreSeconds < scores[i] || !scores[i]) {
        newEntry = i;
        scores.splice(i, 0, newScoreSeconds);
        if (scores.length > 10) {
          scores.pop();
        }
        break;
      }
    }

    //TODO: account for difficulties here too, if implementing
    localStorage.setItem("highScores", JSON.stringify({ scores }));
  }

  return (
    <div className="ScorePage">
      <h2>High Scores</h2>
      <h2>
        {!!newEntry && "🌸 "}
        {getDisplayTime(newScoreSeconds)}
        {!!newEntry && " 🌸"}
      </h2>
      <ol className="ScorePage-scores">
        {ARR10.map((n) => {
          return (
            <li key={n} className={n === newEntry ? "new-entry" : ""}>
              {scores[n] ? getDisplayTime(scores[n]) : "-"}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ScorePage;
