const levels = [
  {
    name: "Hazbin Hotel",
    env: "warehouse",
    image: "/level/hazbin_hotel.jpg",
    music: "/sounds/Nostalegie90.m4a",
  },
  {
    name: "Montagne",
    env: "forest",
    image: "/level/montagne.png",
    music: "/sounds/Nostalegie90.m4a",
  },
  {
    name: "Akuma Highway",
    env: "night",
    image: "/level/Akuma.gif",
    music: "/sounds/Nostalegie90.m4a",
  },
  {
    name: "France",
    env: "sunset",
    image: "/level/france.png",
    music: "/sounds/Nostalegie90.m4a",
  },
];

const LevelSelection = ({ onSelectLevel }) => {
  return (
    <div className="level-selection">
      <h2>Choisissez un niveau</h2>
      <div className="levels">
        {levels.map((level) => (
          <div
            key={level.name}
            className="level-card"
            onClick={() => onSelectLevel(level)}
          >
            <img src={level.image} alt={level.name} />
            <h3>{level.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelSelection;
