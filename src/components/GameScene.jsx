import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import BallAndCollisions from "./BallAndCollisions";
import Paddle from "./Paddle";
import Block from "./Block";
import { Environment } from "@react-three/drei";
import Background from "./Background";
import { PowerUp, Bumper } from "./InteractiveElements";

const GameScene = ({ onScore, onBallLost, selectedLevel }) => {
  useEffect(() => {
    const audio = new Audio("/sounds/nostalegie90.m4a");
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [selectedLevel]);

  return (
    <Canvas dpr={1.5} camera={{ position: [0, 2, 12], fov: 50 }}>
      <Physics iterations={5} gravity={[0, -30, 0]}>
        <BallAndCollisions onBallLost={onBallLost} onScore={onScore} />
        <Paddle />
        {Array.from({ length: 6 }, (_, i) => (
          <Block key={i} position={[0, 1 + i * 4.5, 0]} offset={10000 * i} />
        ))}
        <Block
          args={[10, 1.5, 4]}
          position={[-11, -7, 0]}
          rotation={[0, 0, -0.7]}
          material={{ restitution: 1.2 }}
        />
        <Block
          args={[10, 1.5, 4]}
          position={[11, -7, 0]}
          rotation={[0, 0, 0.7]}
          material={{ restitution: 1.2 }}
        />
        <Environment preset={selectedLevel.env} />
        <Background position={[0, 0, -5]} />
        <Bumper position={[2, 2, 0]} onHit={() => onScore((prev) => prev + 15)} />
        <PowerUp position={[3, 3, 0]} onHit={() => onScore((prev) => prev + 50)} />
      </Physics>
    </Canvas>
  );
};

export default GameScene;

