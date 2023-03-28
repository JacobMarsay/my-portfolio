import styled from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const PageContentContainer = styled.div`
  flex-grow: 1;
  margin-left: 15%;
  overflow-x: hidden;
`;

export const SectionHeadingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40vh;
  overflow-x: hidden;
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
