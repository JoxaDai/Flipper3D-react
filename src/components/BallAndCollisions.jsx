import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useSphere, usePlane } from "@react-three/cannon";
import { useTexture, PerspectiveCamera } from "@react-three/drei";

const BallAndCollisions = ({ onBallLost }) => {
  const cam = useRef();
  const bumperSound = new Audio("/sounds/bumperSound.mp3");
  const texture = useTexture("/cross.jpg");

  const [ref, api] = useSphere(() => ({
    args: 1.2,
    mass: 1,
    material: { restitution: 0.95 },
    onCollide: () => bumperSound.play(),
  }));

  usePlane(() => ({
    position: [0, -15, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      onBallLost();
      api.position.set(0, 0, 0);
      api.velocity.set(0, 0, 0);
    },
  }));

  useEffect(() => {
    api.position.subscribe((p) =>
      cam.current.position.lerp(new THREE.Vector3(p[0], p[1], 18 + Math.max(0, p[1]) / 2), 0.05)
    );
  }, []);

  return (
    <>
      <PerspectiveCamera ref={cam} makeDefault position={[0, 0, 12]} fov={50} />
      <mesh ref={ref}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial map={texture} transmission={1} roughness={0} thickness={10} envMapIntensity={1} />
      </mesh>
    </>
  );
};

export default BallAndCollisions;


