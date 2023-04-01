import { useEffect, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { degreesToRadians, progress, mix } from "popmotion";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeUp, scaleSection, zoomOut } from "../anims/animations";
import { AnimateSharedLayout } from "framer-motion";

const SplashContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  background: #111418;
`;
const color = "#088f8f";

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 100 }) {
  const gl = useThree((state) => state.gl);
  const distance = useRef(mix(2, 3.5, Math.random()));
  const yAngle = useRef(
    mix(degreesToRadians(80), degreesToRadians(100), Math.random())
  );

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    distance.current = mix(2, 3.5, Math.sin(t * 0.2));
    yAngle.current = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.sin(t * 1.0)
    );
    camera.position.setFromSphericalCoords(
      distance.current,
      yAngle.current,
      t * 1
    );
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star key={i} p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

const Splash = () => {
  const [zoomedIn, setZoomedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomedIn(true);
    }, 9700); // 9.7 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContainer
      initial={{ scale: 1 }}
      animate={zoomedIn ? { scale: -1000 } : { scale: 1 }}
      transition={{ duration: 2 }}
    >
      <AnimateSharedLayout>
        <Canvas gl={{ antialias: false }}>
          <Scene />
        </Canvas>
      </AnimateSharedLayout>
    </SplashContainer>
  );
};

export default Splash;
