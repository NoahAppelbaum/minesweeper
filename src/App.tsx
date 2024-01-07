import Game from './Game'
import HeaderBar from './HeaderBar'
import "./stylesheets/App.css"

function App() {

  return (
    <div className='App'>
      <HeaderBar />
      <Game size={8} nMines={10} />
    </div>
  )
}

export default App
