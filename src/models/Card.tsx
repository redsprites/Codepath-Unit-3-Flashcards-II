export interface Card {
    question: string;
    answer: string;
  }
  
export interface FlashcardProps {
    card: Card;
    reset: boolean;
  }