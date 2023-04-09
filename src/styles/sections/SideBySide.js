import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: relative;
  background: #212529;
  flex-direction: column;
  padding: 5rem 0rem;
`;

export const SectionContainerLight = styled(SectionContainer)`
  background: #343a40;
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
  @media(min-width: 600px) and (max-width: 1250px){
    align-items: center;

    h2{
      font-size: 8rem;
      line-height: 8rem;
    }
  }
    span{
      font-size: 3.5rem;
    }

    @media(min-width: 280px) and (max-width: 569px){
    align-items: center;

    h2{
      font-size: 6rem;
      line-height: 6rem;
    }
  }
    span{
      font-size: 2.5rem;
    }
`;
