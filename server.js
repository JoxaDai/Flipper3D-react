const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

let scores = [];

app.use(cors());
app.use(bodyParser.json());

app.post("/submit-score", (req, res) => {
  const { playerName, playerAvatar, score } = req.body;
  if (!playerName || !playerAvatar || !score) {
    return res.status(400).send("Toutes les données du joueur ne sont pas fournies");
  }
  scores.push({ playerName, playerAvatar, score });
  res.status(201).send("Score ajouté");
});

app.get("/get-scores", (req, res) => {
  res.json(scores);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
