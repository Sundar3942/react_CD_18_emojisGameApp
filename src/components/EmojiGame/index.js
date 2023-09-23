import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    gameGoing: true,
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
  }

  emojiClickHandler = id => {
    this.setState(prevState => {
      const clickedList = prevState.clickedEmojisList
      if (clickedList.includes(id)) {
        return {gameGoing: false, clickedEmojisList: []}
      }
      if (clickedList.length === 11 && !clickedList.includes(id)) {
        const newClickedList = [...prevState.clickedEmojisList, id]
        return {
          gameGoing: false,
          score: prevState.score + 1,
          clickedEmojisList: newClickedList,
        }
      }
      const newClickedList = [...prevState.clickedEmojisList, id]
      return {clickedEmojisList: newClickedList, score: prevState.score + 1}
    })
  }

  playAgainHandler = score => {
    this.setState(prevState => {
      const top = score > prevState.topScore ? score : prevState.topScore
      return {gameGoing: true, score: 0, clickedEmojisList: [], topScore: top}
    })
  }

  render() {
    const {score, topScore, clickedEmojisList, gameGoing} = this.state
    console.log(clickedEmojisList)
    const scoreInfo = {score, topScore}
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="page">
        <NavBar gameGoing={gameGoing} scoreInfo={scoreInfo} />
        {gameGoing && (
          <ul className="emoji-container">
            {shuffledEmojisList.map(each => (
              <EmojiCard
                emojiClickHandler={this.emojiClickHandler}
                emojiDetails={each}
                key={each.id}
              />
            ))}
          </ul>
        )}
        {!gameGoing && (
          <WinOrLoseCard
            playAgainHandler={this.playAgainHandler}
            score={score}
            clickedEmojisList={clickedEmojisList}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
