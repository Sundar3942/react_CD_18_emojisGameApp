// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {clickedEmojisList, score, playAgainHandler} = props
  const lengthOfList = clickedEmojisList.length

  const playAgain = () => {
    playAgainHandler(score)
  }

  const heading = lengthOfList === 12 ? 'You Won' : 'You Lose'
  const scoreOrBestScore = lengthOfList === 12 ? 'Best Score' : 'Score'
  const imageUrl =
    lengthOfList === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-lose-container">
      <div>
        <h1>{heading}</h1>
        <p>{scoreOrBestScore}</p>
        <p className="score-display">{score}/12</p>
        <button type="button" onClick={playAgain} className="play-again-btn">
          Play Again
        </button>
      </div>
      <img className="image" src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
