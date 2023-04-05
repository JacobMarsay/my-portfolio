import styled from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const PageContentContainer = styled.div`
  flex-grow: 1;
  margin-left: 15%;
  overflow-x: hidden;
  @media (max-width: 1250px) {
    margin: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const SectionHeadingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  overflow-x: hidden;
  overflow-y: hidden;
  h3 {
    z-index: 3;
    color: #d1d1d1;
  }
`;
export const ButtonLayoutElement = styled(motion.button)`
  padding: 1.5rem 5rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-family: "Poppins";
  background-color: transparent;
  border-color: white;
  color: white;
`;
