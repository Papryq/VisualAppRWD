import { useEffect, useState } from 'react';

// styles
import './MemoryGame.css';
import SingleCard from './SingleCard';
import swordIcon from '../../assets/memorygame/sword-1.png'
import potionIcon from '../../assets/memorygame/potion-1.png'
import ringIcon from '../../assets/memorygame/ring-1.png'
import scrollIcon from '../../assets/memorygame/scroll-1.png'
import shieldIcon from '../../assets/memorygame/shield-1.png'
import helmetIcon from '../../assets/memorygame/helmet-1.png'

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
        <div className='bg-violet-400 '>
            <h1 className=''>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>
    
            <div className="grid grid-cols-4">
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
            <p>Turns: {turns}</p>
        </div>
      );
}
