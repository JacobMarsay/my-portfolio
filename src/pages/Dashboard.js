import { React, useState, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useAnimation,
  AnimateSharedLayout,
  AnimatePresence,
} from "framer-motion";

import { fadeUp, pageAnimation, scaleSection } from "../anims/animations";

//Import components
import HeroImage from "../components/HeroImage";
import Hero from "../assets/software-developer.jpg";
import Nav from "../components/Nav/Nav";
import TypedText from "../anims/TypedText";
import CurvedLine from "../components/CurvedLine";
import ServiceSection from "../components/ServicesSection";

//import global styles
import { PageContentContainer } from "../styles/global/Pages";
import AboutMeSection from "../components/AboutMeSection";
import ProjectSection from "../components/ProjectSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Splash from "../components/Splash";
import useScroll from "../hooks/useScroll";

const Dashboard = () => {
  const heroAnimation = useAnimation();
  const [showComponent, setShowComponent] = useState(true);

  const PageContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  `;
  const animateHero = async () => {
    await heroAnimation.start({
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    });
  };
  animateHero();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showComponent ? (
        <Splash />
      ) : (
        <PageContainer
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <AnimateSharedLayout>
            <Nav />
            <PageContentContainer>
              <HeroContainer>
                <HeroImage heroImage={Hero} />
                <HeroOverlay animate={heroAnimation}>
                  <HeroHeadingContainer>
                    <motion.h1
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 2 }}
                    >
                      <TypedText text="A Fullstack Developer with Passion For Modern Web Apps and Design." />
                    </motion.h1>
                    <UnderlineContainer>
                      <CurvedLine />
                    </UnderlineContainer>
                  </HeroHeadingContainer>
                </HeroOverlay>
              </HeroContainer>
              <AboutMeSection />
              <ServiceSection />
              <ExperienceSection />
              <ProjectSection />
              <ContactSection />
            </PageContentContainer>
          </AnimateSharedLayout>
        </PageContainer>
      )}
    </>
  );
};

export default Dashboard;

export const CardsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const HeroContainer = styled(motion.div)`
  position: relative;
  width: 100%;
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
  h1 {
    font-family: "Poppins";
    font-size: 8rem;
    line-height: 8rem;
  }
`;

export const ScrollWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1;
`;

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

export const UnderlineContainer = styled.div`
  position: absolute;
  bottom: -400px;
  left: 0px;
`;
