import React from "react";

const GameOverScreen = ({ playerName, score, onRestart }) => {
  return (
    <div className="game-over-screen">
      <h1>Game Over</h1>
      <p>Merci d'avoir joué, {playerName}!</p>
      <p>Votre score est de: {score}</p>
      <button onClick={onRestart}>Recommencer</button>
    </div>
  );
};

export default GameOverScreen;
