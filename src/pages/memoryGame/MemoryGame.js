import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import './MemoryGame.css';
import SingleCard from './SingleCard';
import swordIcon from '../../assets/memorygame/sword-1.png'
import potionIcon from '../../assets/memorygame/potion-1.png'
import ringIcon from '../../assets/memorygame/ring-1.png'
import scrollIcon from '../../assets/memorygame/scroll-1.png'
import shieldIcon from '../../assets/memorygame/shield-1.png'
import helmetIcon from '../../assets/memorygame/helmet-1.png'
import arrowBackIcon from '../../assets/rightarrow2.png'

const cardImages = [
  { "src": `${helmetIcon}`, matched: false},
  { "src": `${potionIcon}`, matched: false },
  { "src": `${ringIcon}`, matched: false },
  { "src": `${scrollIcon}`, matched: false },
  { "src": `${shieldIcon}`, matched: false },
  { "src": `${swordIcon}`, matched: false }
]
export default function MemoryGame() {
      const [cards, setCards] = useState([])
      const [turns, setTurns] = useState(0)
      const [choiceOne, setChoiceOne] = useState(null)
      const [choiceTwo, setChoiceTwo] = useState(null)
      const [disabled, setDisabled] = useState(false)
    
      // Shuffle cards
      const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
          .sort(() => Math.random() - 0.5)
          .map((card) => ({ ...card, id: Math.random() }))
    
          setChoiceOne(null)
          setChoiceTwo(null)
          setCards(shuffledCards)
          setTurns(0)
      }
    
      // handle a choice
    
      const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
      }
    
      
      // compare 2 selected cards
      
      useEffect(() => {
        if(choiceOne && choiceTwo) {
          setDisabled(true)
          if (choiceOne.src === choiceTwo.src) {
            setCards(prevCards => {
              return prevCards.map(card => {
                if (card.src === choiceOne.src) {
                  return {...card, matched: true}
                } else {
                  return card
                }
              })
            })
            setTimeout(() => resetTurn(), 1000)
          }else {
            setTimeout(() => resetTurn(), 1000)
          }
        }
      }, [choiceOne, choiceTwo])
      
      // reset choices & increase turn
    
      const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
      }
    
      // start game automatically
      useEffect(() => {
        shuffleCards()
      }, [])
    
      return (
        <div className='title'>
          <div className='backdrop-blur-xl min-h-screen max-md:overflow-hidden'>
            <Link to="/dashboard">
              <img 
                src={arrowBackIcon} 
                alt="back"
                className='absolute top-4 left-8 w-10 h-10 rotate-180 bg-purple-300 rounded-full cardSelectStyle p-1'   
              />
            </Link>
            <h1 className='flex justify-center p-4 text-6xl font-extrabold border-b border-black mx-4 max-md:text-4xl'>
              <span>Magic Match</span>
            </h1>
            <div className='flex justify-between p-7 text-2xl text-neutral-100'>
              <button 
                className='cardSelectStyle' 
                onClick={shuffleCards}
              >New Game
              </button>
              <p>Turns: {turns}</p>
            </div>
            <div className="grid max-sm:grid-cols-3 grid-cols-4 mx-auto gap-3 w-1/2 max-md:w-11/12 max-md:mx-10">
              {cards.map(card => (
                <SingleCard 
                key={card.id} 
                card={card} 
                handleChoice={handleChoice}
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}
                />
              ))}
            </div>
          </div>
        </div>
      );
}
