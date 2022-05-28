import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Jugadores from './jugadores.json';
import './App.css';
import GameOver from './components/GameOver';

function App() {
  const [jugadores, setJugadores] = useState(Jugadores.slice(0, 16));
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(Number(localStorage.getItem('highScore')))
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', highScore);
    }
    if (jugadores.every(jugador => jugador.clicked === true) && !isGameOver) {
      win();
    }
  }, [score, highScore])


  const gameOver = () => setIsGameOver(true);

  const win = () => {
    setIsWinner(true);
    setIsGameOver(true);
  };

  const handleCardClick = (jugadorIndex) => {
    if (!jugadores[jugadorIndex].clicked) {
      const newJugadores = [...jugadores];
      newJugadores[jugadorIndex].clicked = true;
      for (let i = newJugadores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = newJugadores[i];
        newJugadores[i] = newJugadores[j];
        newJugadores[j] = temp;
      }
      setJugadores(newJugadores);
      setScore(score + 1)
    } else {
      gameOver();
    }
  }

  const restartGame = () => {
    jugadores.forEach(jugador => jugador.clicked = false);
    setIsWinner(false);
    setIsGameOver(false);
    setScore(0);
  }

  return (
    <div>
      <Header score={score} highScore={highScore} />
      {isGameOver ? <GameOver isWinner={isWinner} restartGame={restartGame} /> : null}
      <div className='cards-grid'>
        {
          jugadores.map((jugador, index) => {
            return (
              <Card
                key={index}
                jugador={jugador}
                index={index}
                handleClick={handleCardClick}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
