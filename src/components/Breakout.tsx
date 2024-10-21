import React, { useRef, useEffect, useState } from 'react';

const BreakoutGame = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameOver, setGameOver] = useState(true);
  const [molePosition, setMolePosition] = useState(null);

  useEffect(() => {
    //@ts-ignore
      let countdown;
        //@ts-ignore
      let moleInterval;
      if (!gameOver) {
          countdown = setInterval(() => {
              setTimer((prevTimer) => {
                  if (prevTimer <= 1) {
                      //@ts-ignore
                      clearInterval(countdown);
                      setGameOver(true);
                      alert(`Game Over!\nYour final score: ${score}`);
                      setScore(0);
                      setTimer(60);
                      return 60;
                  }
                  return prevTimer - 1;
              });
          }, 1000);

          moleInterval = setInterval(() => {
              if (!gameOver) {
                  const random = Math.floor(Math.random() * 9);
                    //@ts-ignore
                  setMolePosition(random);
              }
          }, 1000);
      }

      return () => {
          //@ts-ignore
          clearInterval(countdown);
            //@ts-ignore
          clearInterval(moleInterval);
      };
  }, [gameOver, score]);

  const startGame = () => {
      if (!gameOver) return;
      setGameOver(false);
      setScore(0);
      setTimer(60);
  };

  const endGame = () => {
      setGameOver(true);
      alert(`Game Ended!\nYour final score: ${score}`);
      setScore(0);
      setTimer(60);
  };

  const handleMoleClick = () => {
      if (!gameOver) {
          setScore(score + 1);
          setMolePosition(null);  // Immediately remove mole
      }
  };

  return (
      <div className="w-full h-full overflow-hidden">
          <div className="game-info">
              <div id="score">Score: {score}</div>
              <div id="timer">Time: {timer}s</div>
          </div>
          <button id="startButton" onClick={startGame} disabled={!gameOver}>
              Start Game
          </button>
          <button id="endButton" onClick={endGame} disabled={gameOver}>
              End Game
          </button>
          <div className="game-container">
              {Array.from({ length: 3 }).map((_, index) => (
                  <div
                      key={index}
                      className={`hole ${molePosition === index ? 'mole' : ''}`}
                      onClick={molePosition === index ? handleMoleClick : undefined}
                  ></div>
              ))}
          </div>
      </div>
  );
};

export default BreakoutGame;
