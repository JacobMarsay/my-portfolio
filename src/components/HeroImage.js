import { motion } from "framer-motion";
import styled from "styled-components";

const HeroImage = ({ heroImage }) => {
  return (
    <HeroImageContainer
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <img src={heroImage} alt="" />
    </HeroImageContainer>
  );
};

const HeroImageContainer = styled(motion.div)`
  display: flex;
  position: relative;
  max-width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  opacity: 0.8;
`;
export default HeroImage;
