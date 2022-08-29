import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/panda-dancer.jpg" },
  { src: "/img/panda-fighter.jpg" },
  { src: "/img/panda-gamer.jpg" },
  { src: "/img/panda-happy.jpg" },
  { src: "/img/panda-lover.jpg" },
  { src: "/img/panda-musician.jpg" },
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

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" s key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img
                className="back"
                src="/img/image-cover.jpg"
                alt="card back"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
