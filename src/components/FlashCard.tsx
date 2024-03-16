import React, { useEffect, useState } from 'react';
import './FlashCard.css';
import { FlashcardProps } from '../models/Card';

const Flashcard: React.FC<FlashcardProps> = ({ card, reset }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  
  useEffect(() => {
    setShowAnswer(false);
  }, [reset, card]);

  const handleClick = () => setShowAnswer(!showAnswer);

  return (
    <div className={`flashcard ${showAnswer ? 'showAnswer' : ''}`} onClick={handleClick}>
      <div className="flashcard-front">
        {card.question}
      </div>
      <div className="flashcard-back">
        {card.answer}
      </div>
    </div>
  );
}

export default Flashcard;
