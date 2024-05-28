import * as THREE from "three";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { useBox } from "@react-three/cannon";
import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Block = forwardRef(
  (
    { shake = 0, args = [1, 1.5, 4], vec = new THREE.Vector3(), ...props },
    ref
  ) => {
    const group = useRef();
    const [block, api] = useBox(() => ({
      args,
      ...props,
      onCollide: (e) => (shake += e.contact.impactVelocity / 12.5),
    }));

    useFrame(() =>
      group.current.position.lerp(
        vec.set(0, (shake = THREE.MathUtils.lerp(shake, 0, 0.1)), 0),
        0.2
      )
    );
    useImperativeHandle(ref, () => api, [api]);

    return (
      <group ref={group}>
        <RoundedBox ref={block} args={args} radius={0.4} smoothness={10}>
          <meshPhysicalMaterial
            transmission={1}
            roughness={0}
            thickness={3}
            envMapIntensity={4}
          />
        </RoundedBox>
      </group>
    );
  }
);

export default Block;
