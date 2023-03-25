import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { 
  motion, 
  useAnimation,
  AnimateSharedLayout,
  useViewportScroll
} from "framer-motion";

//Import components
import Card from "../components/Cards/Card";
import HeroImage from "../components/HeroImage";
import Hero from "../assets/code-hero-image.jpg";
import Nav from "../components/Nav/Nav";
import TypedText from "../anims/TypedText";
import CurvedLine from "../components/CurvedLine";

//import global styles
import { PageContainer, PageContentContainer, SectionHeadingContainer} from "../styles/global/Pages";
import { ScrollyHeaderWrapper } from "../styles/sections/SideBySide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectData } from "../util/project-util";
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { scaleSection } from "../anims/animations";
import useScroll from '../hooks/useScroll';
import { useParallax } from "../hooks/useParallax";
import AboutCta from "../components/AboutCta";

const Dashboard = () => {
  const [element, controls] = useScroll();


  const leftOffset = useParallax(0.2, "left");
  const rightOffset = useParallax(0.1, "right");
  
  const projectInfo = ProjectData();
  const heroAnimation = useAnimation();

  const animateHero = async () => {
    await heroAnimation.start({
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    });
  };

  animateHero();
  return (
    <PageContainer>
      <Nav />
      <HeroContainer>
        <HeroImage heroImage={Hero}/>
        <HeroOverlay animate={heroAnimation}>
          <HeroHeadingContainer>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 2 }}
            >
              <TypedText text="A Fullstack Developer with Passion For Modern Web Apps and Design." 
              />
            </motion.h1>
            <UnderlineContainer>
              <CurvedLine/>
            </UnderlineContainer>
          </HeroHeadingContainer>
        </HeroOverlay>
        <HeroIconsContainer>
          <FontAwesomeIcon icon={faGithub} size="5x" className="icon github"/>
          <FontAwesomeIcon icon={faLinkedin} size="5x" className="icon linkedin"/>
        </HeroIconsContainer>
      </HeroContainer>
      <PageContentContainer>
        <SectionHeadingContainer>
          <ScrollyHeaderWrapper style={{ right: rightOffset }} direction="right">
            <motion.span>01</motion.span>
            <motion.h2>My Projects</motion.h2>
          </ScrollyHeaderWrapper>
        </SectionHeadingContainer>
          <CardsContainer
            variants={scaleSection}
            animate={controls}
            ref={element}
            initial="hidden"
          >
            <AnimateSharedLayout>
              {projectInfo.map((project) => (
                <Card
                  key={project.id}
                  id={project.id}
                  image={project.image.CardPlaceHolderImg}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </AnimateSharedLayout>
          </CardsContainer>
        <AboutCta />
      </PageContentContainer>
    </PageContainer>
  );
};

export default Dashboard;

export const CardsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const HeroContainer = styled(motion.div)`
  position: relative;
`;

export const HeroHeadingContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  h1{
    font-family: 'Poppins';
    font-size: 8rem;
    line-height: 8rem;
  }
`

export const ScrollWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1;
`;

export const HeroIconsContainer = styled.div `
    position: absolute;
    bottom: 0;
    left: 8%;
    display: flex;
    padding: 20px;
    gap: 20px;

    .icon {
      position: relative;
      z-index: 3;
      color: white;
      padding: 10px;
    }
  
    .github {
      left: 0;
    }
  
    .linkedin {
      left: 5px;
    }
`
export const HeroOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

export const UnderlineContainer = styled.div `
  position: absolute;
  bottom: -400px;
  left: 0px;
`

