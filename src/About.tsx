import "./stylesheets/About.css"

/*
FIXME:
DO NOT have this be displayed based on context!
instead, show or hide, simply displayed on top of the game. Like a whole-screen popup.
Later, I can do fancy things with pausing/unpausing the timer!
*/

export default function About({ setGameState }: { setGameState: (state: string) => void }) {
  return (
    <div className="About">
      <button
        className="About-back-button"
        onClick={() => {
          setGameState("ACTIVE");
        }}
      >
        ↩
      </button>
      <h2 className="logo">Jocelyn Sweeper</h2>
      <div className="About-chunk">
        <p>
          Jocelyn Sweeper is a take on the classic game Minesweeper, featuring
          the queen of our household, Jocelyn Adelaide Neshelbaum, the Duchess
          McPiggen. All art is illustrated by my fabulous wife, Kelly Nesheim,
          and everything else was made by me,{" "}
          <a
            href="https://github.com/noahappelbaum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Noah Appelbaum
          </a>
        </p>
        <img
        className="rounded"
          src="/about-images/jocelynpic.jpeg"
          alt="Jocelyn Adelaide Neshelbaum, the Duchess McPiggen"
        />
      </div>

      <h2>How to Play</h2>
      <div className="About-chunk">
        <p>
          The goal of the game is to uncover all of the delicious vegetables in
          the garden! But no tomatoes -- Jocelyn hates those!
        </p>
      </div>
      <div className="About-chunk">
        <p>
          Click/touch a square to reveal garden spaces. A number in a revealed
          space shows how many tomatoes are touching that square.
        </p>
        <img
          src="/about-images/adjacent.png"
          alt="Numbers show adjacent tomatoes"
        />
      </div>
      <div className="About-chunk">
        <img
          src="/about-images/xmark.png"
          alt="Right click or hold to mark potential tomatoes"
        />
        <p>
          Right click or press-and-hold a space to mark it as a potential
          tomato. Use this to help you keep track!
        </p>
      </div>
      <div className="About-chunk">
        <p>
          If you click on a tomato, you lose! Try again, and see how fast you
          can find all those vegetables!
        </p>
        <img
          src="/about-images/tomatoes.png"
          alt="If you click on a tomato, you lose!"
        />
      </div>
    </div>
  );
}
