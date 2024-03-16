import React, { useState } from 'react';
import Flashcard from './components/FlashCard';
import './App.css';
import { Card , FlashcardProps } from './models/Card';

const initialCards: Card[] = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
    { question: "What planet is known as the Red Planet?", answer: "Mars" },
    { question: "In what year did the Titanic sink?", answer: "1912" },
    { question: "What is the largest mammal in the world?", answer: "Blue whale" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the smallest prime number?", answer: "2" },
    { question: "What element does 'O' represent on the periodic table?", answer: "Oxygen" },
    { question: "Who is known as the father of computers?", answer: "Charles Babbage" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
    { question: "What is the currency of Japan?", answer: "Yen" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "Who wrote 'The Theory of Relativity'?", answer: "Albert Einstein" },
    { question: "What is the main ingredient in guacamole?", answer: "Avocado" },
    { question: "What is the longest river in the world?", answer: "The Nile" },
    { question: "Who is the author of 'Harry Potter'?", answer: "J.K. Rowling" },
    { question: "What gas do plants breathe in that humans and animals breathe out?", answer: "Carbon dioxide" },
];

const App: React.FC = () => {
  const [cards] = useState<Card[]>(initialCards);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [reset, setReset] = useState<boolean>(false);

  const showRandomCard = () => {
    setReset(!reset);
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * cards.length);
    while (randomIndex === currentCardIndex) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }
    setCurrentCardIndex(randomIndex);
    }, 270);
    
   
  };

  return (
    <div className="app">
      <h1>General Knowledge Flashcards</h1>
      <p>A collection of general knowledge questions to test your trivia skills.</p>
      <p>Total Cards: {cards.length}</p>
      <Flashcard card={cards[currentCardIndex]} reset={reset} />
      <button onClick={showRandomCard}>Choose Random Card</button>
    </div>
  );
}

export default App;
