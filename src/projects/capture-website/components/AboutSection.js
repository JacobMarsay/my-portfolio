import React from "react";
import home1 from "../img/home1.png";
import Wave from "./Wave";

// Import Styles
import styled from "styled-components";
import {
  SideBySideContainer,
  DescriptionContainer,
  ImageContainer,
  HideContainer,
} from "../styles/layouts/LayoutStyles";

// Framer motion
import { motion } from "framer-motion";
import { animImage, slideContainer, fadeIn } from "../../../anims/animations";

// Import Router DOM

import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <AboutContainer>
      <DescriptionContainer>
        <motion.div
          variants={slideContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
          <HideContainer>
            <motion.h2 variants={fadeIn}>We work to make</motion.h2>
          </HideContainer>
          <HideContainer>
            <motion.h2 variants={fadeIn}>
              your<span> dreams</span> come
            </motion.h2>
          </HideContainer>
          <HideContainer>
            <motion.h2 variants={fadeIn}>true.</motion.h2>
          </HideContainer>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professaionals with amazing skills.
        </p>
        <button>
          <Link to="/contact">Contact Us</Link>
        </button>
      </DescriptionContainer>
      <ImageContainer>
        <motion.img variants={animImage} src={home1} alt="Man with a camera" />
      </ImageContainer>
      <Wave />
    </AboutContainer>
  );
}

const AboutContainer = styled(SideBySideContainer)`
  position: relative;

  // Tablet
  @media (min-width: 768px) and (max-width: 912px) {
    img {
      height: 40vh;
    }
  }

  // Mobile
  @media (min-width: 280px) and (max-width: 725px) {
    flex-direction: column;
    padding: 3rem 3rem;
    margin: 0;
    margin-top: 10rem;
    width: 100%;
    button {
      margin-bottom: 10rem;
    }
    img {
      width: 90%;
      height: 90%;
    }
  }
`;

export default AboutSection;
