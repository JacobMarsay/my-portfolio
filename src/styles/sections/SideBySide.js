import styled from "styled-components";
import { motion } from "framer-motion";

export const SideBySideContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  flex-direction: row;
  background-color: #5a5a5a;
  width: 100%;
  height: 80vh;
  margin: 5rem 0;
  position: relative;
`;
export const SideBySideContentContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  p {
    margin: 0rem 4rem;
    color: white;
    font-family: "Poppins";
    padding-bottom: 2rem;
  }
`;

export const ScrollyHeaderWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 40vh;

  h2 {
    font-size: 15rem;
    font-family: "Oswald";
    transform: ${({ direction }) =>
      direction === "left" ? "translateX(-20%)" : "translateX(10%)"};
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
