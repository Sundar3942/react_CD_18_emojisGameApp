// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClickHandler} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmoji = () => {
    emojiClickHandler(id)
  }

  return (
    <li className="emojiCard">
      <button type="button" className="emojiBtn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}

export default EmojiCard
