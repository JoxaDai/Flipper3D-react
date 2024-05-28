import { useEffect, useState } from "react";
import axios from "axios";

const ScoreBoard = ({ scores, onClose }) => {
  return (
    <div className="scoreboard">
      <h2>Tableau des scores</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.playerName}: {score.score}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default ScoreBoard;
