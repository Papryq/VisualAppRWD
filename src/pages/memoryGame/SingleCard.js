
// styles
import './SingleCard.css'
import coverIcon from '../../assets/memorygame/cover.png'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }
    }

    return ( 
    <div className="card max-sm:w-1/2">
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card front" />
          <img 
          className="back" 
          src={coverIcon} 
          onClick={handleClick} 
          alt="card back" 
          />
        </div>
    </div>
     );
}
 
export default SingleCard;