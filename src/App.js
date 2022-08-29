import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/public/img/panda-dancer.jpg" },
  { src: "/public/img/panda-fighter.jpg" },
  { src: "/public/img/panda-gamer.jpg" },
  { src: "/public/img/panda-happy.jpg" },
  { src: "/public/img/panda-lover.jpg" },
  { src: "/public/img/panda-musician.jpg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  // TODO: 1 - take the card array and duplicate them into 12
  // TODO: 2 - sort the images and mix them to shuffle them up
  // TODO: 3 - store the shuffle card into the setCards state
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
