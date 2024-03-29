export default function AboutButton({
  setGameState,
}: {
  setGameState: (state: string) => void;
}) {
  return (
    <div
      className="AboutButon"
      onClick={() => {
        setGameState("ABOUT");
      }}
    >
      ?
    </div>
  );
}
