import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Block from "./Block";

const Paddle = ({ args = [5, 1.5, 4] }) => {
  const api = useRef();
  useFrame(
    (state) => (
      api.current.position.set(state.mouse.x * 10, -5, 0),
      api.current.rotation.set(0, 0, (state.mouse.x * Math.PI) / 4)
    )
  );

  return <Block ref={api} args={args} material={{ restitution: 1.3 }} />;
};

export default Paddle;
