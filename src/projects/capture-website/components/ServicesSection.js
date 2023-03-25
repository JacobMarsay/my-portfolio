import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
// Import Styles
import {
  DescriptionContainer,
  ImageContainer,
} from "../styles/layouts/LayoutStyles";

//Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../anims/animations";

// Scroll effects
import useScroll from "../components/useScroll";

function ServicesSection() {
  const [element, controls] = useScroll();

  return (
    <ServicesContainer
      variants={fadeIn}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <DescriptionContainer>
        <h2>
          High <span>Quality</span> Services
        </h2>
        <CardsContainer>
          <CardContainer>
            <div className="icon">
              <img src={clock} alt="Clock Icon" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardContainer>
          <CardContainer>
            <div className="icon">
              <img src={diaphragm} alt="Diaphram Icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardContainer>
          <CardContainer>
            <div className="icon">
              <img src={money} alt="Money Icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardContainer>
          <CardContainer>
            <div className="icon">
              <img src={teamwork} alt="Team work Icon" />
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardContainer>
        </CardsContainer>
      </DescriptionContainer>
      <ImageContainer>
        <img src={home2} alt="Camera" />
      </ImageContainer>
    </ServicesContainer>
  );
}

// Gets all styles applied from 'SideBySide Container'.
const ServicesContainer = styled(motion.div)`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 2rem 6rem;
  @media (min-width: 280px) and (max-width: 969px) {
    display: block;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  h2 {
    padding: 0rem 0rem 5rem 5rem;
    @media (min-width: 280px) and (max-width: 969px) {
      text-align: center;
    }
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
    @media (min-width: 280px) and (max-width: 569px) {
      width: 100%;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 280px) and (max-width: 569px) {
    justify-content: center;
    width: 100%;
  }
`;

const CardContainer = styled.div`
  flex-basis: 20rem;
  padding-left: 5rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
      background: #ffffff;
      color: #000000;
    }
  }
  @media (min-width: 280px) and (max-width: 569px) {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

export default ServicesSection;
