import styled from "styled-components";
import { motion } from "framer-motion";

export const SideBySideContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  flex-direction: column;
  width: 100%;
  margin: 5rem 0;
  position: relative;
`;
export const SideBySideContentContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ScrollyHeaderWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 0;

  h2 {
    font-size: 15rem;
    font-family: "Oswald";
    transform: ${({ direction }) =>
      direction === "left" ? "translateX(40%)" : "translateX(45%)"};
    line-height: 15rem;
  }
  span {
    font-size: 5rem;
    font-family: "Oswald";
    transform: ${({ direction }) =>
      direction === "left" ? "translateX(-20%)" : "translateX(10%)"};
    padding: 0;
  }
`;
