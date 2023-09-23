// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreInfo, gameGoing} = props
  const {score, topScore} = scoreInfo

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {gameGoing && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
