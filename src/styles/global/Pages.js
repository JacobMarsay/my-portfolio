import styled from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  width: 100%;
  height: 100vh;
  min-width: 100vw;
`;

export const PageContentContainer = styled.div`
  width: 100%;
`;

export const SectionHeadingContainer = styled.div`
 position: relative;
 width: 100%;
 height: 40vh;
 overflow-x: hidden;
`
export const ButtonLayoutElement = styled(motion.button) `
  padding: 1.5rem 5rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-family: 'Poppins';
  background-color: transparent;
  border-color: white;
  color: white;
`