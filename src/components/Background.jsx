import { useAspect, useTexture } from "@react-three/drei";

const Background = (props) => {
  const texture = useTexture("/bg.jpg");
  const scale = useAspect(5000, 3800, 3);
  return (
    <mesh scale={scale} {...props}>
      <planeGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default Background;
