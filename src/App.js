import { useState, useEffect } from "react";
import axios from "axios";
import PlayerInfo from "./components/PlayerInfo";
import LevelSelection from "./components/LevelSelection";
import GameScene from "./components/GameScene";
import ScoreBoard from "./components/ScoreBoard";
import GameOverScreen from "./components/GameOverScreen"; // Assurez-vous de créer ce composant similaire à PlayerInfo

const App = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerAvatar, setPlayerAvatar] = useState("");
  const [step, setStep] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [score, setScore] = useState(0);
  const [ballesRestantes, setBallesRestantes] = useState(3);
  const [scores, setScores] = useState([]);
  const [showScoreBoard, setShowScoreBoard] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [levelMusic, setLevelMusic] = useState(null);

  // Fonction de démarrage du jeu
  const handleStart = (name, avatar) => {
    setPlayerName(name);
    setPlayerAvatar(avatar);
    setStep(1);
  };

  // Fonction de sélection du niveau
  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    setStep(2);
  };

  // Fonction de fin de jeu
  const handleGameEnd = async () => {
    alert("Partie terminée !");
    try {
      await axios.post("/submit-score", { playerName, playerAvatar, score });
      fetchScores();
    } catch (error) {
      console.error("Erreur lors de l'envoi du score :", error);
    }
    setShowScoreBoard(true);
    setGameOver(true);
  };

  // Fonction pour récupérer les scores
  const fetchScores = async () => {
    try {
      const response = await axios.get("/get-scores");
      setScores(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des scores :", error);
    }
  };

  // Utiliser useEffect pour récupérer les scores au chargement du composant
  useEffect(() => {
    fetchScores();
  }, []);

  // Utiliser useEffect pour gérer la musique de niveau sélectionné
  useEffect(() => {
    if (selectedLevel) {
      const audio = new Audio(selectedLevel.music);
      audio.loop = true;
      audio.play();
      setLevelMusic(audio);

      // Arrêter la musique lors du démontage du composant
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [selectedLevel]);

  // Fonction de redémarrage du jeu
  const handleRestart = () => {
    setScore(0);
    setBallesRestantes(3);
    setGameOver(false);
    setShowScoreBoard(false);
    setStep(1);
  };

  // Rendu conditionnel basé sur l'étape actuelle
  if (step === 0) {
    return <PlayerInfo onStart={handleStart} />;
  }

  if (step === 1) {
    return <LevelSelection onSelectLevel={handleSelectLevel} />;
  }

  if (gameOver) {
    return (
      <GameOverScreen
        playerName={playerName}
        score={score}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div>
      {showScoreBoard && (
        <ScoreBoard scores={scores} onClose={() => setShowScoreBoard(false)} />
      )}
      <div className="scoreboard">
        <div>Score: {score}</div>
        <div>Balles restantes: {ballesRestantes}</div>
      </div>
      <GameScene
        onScore={setScore}
        onBallLost={() =>
          setBallesRestantes((prev) => {
            const newBallesRestantes = prev > 0 ? prev - 1 : 0;
            if (newBallesRestantes === 0) {
              handleGameEnd();
            }
            return newBallesRestantes;
          })
        }
        selectedLevel={selectedLevel}
      />
    </div>
  );
};

export default App;
