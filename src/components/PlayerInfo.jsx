import { useState } from "react";

const PlayerInfo = ({ onStart }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart(name, avatar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Entrez vos informations</h2>
      <label>
        Nom:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Avatar:
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </label>
      <button type="submit">Commencer</button>
    </form>
  );
};

export default PlayerInfo;
