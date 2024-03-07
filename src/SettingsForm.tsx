/** SettingsForm
 * Page to adjust game settings, which starts a new game.
 * Props: Callback to start game at selected size
 *
 * App -> SettingsForm
 */
function SettingsForm({
  startGame,
}: {
  startGame: (newSettings: { size: number; nMines: number }) => void;
}) {
  return (
    <div className="SettingsForm">
      <h2>Choose Game Size</h2>
      <button onClick={() => startGame({ size: 8, nMines: 10 })}>Small</button>
      <button onClick={() => startGame({ size: 16, nMines: 40 })}>Medium</button>
      <button onClick={() => startGame({ size: 22, nMines: 99 })}>Large</button>
    </div>
  );
}

export default SettingsForm;
