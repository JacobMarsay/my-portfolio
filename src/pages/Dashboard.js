import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { 
  motion, 
  useAnimation,  
  useSpring,
  useTransform,
  MotionValue,
  useScroll,
  useViewportScroll
} from "framer-motion";
import { useInView } from "react-intersection-observer";

//Import components
import Card from "../components/Cards/Card";
import HeroImage from "../components/HeroImage";
import Hero from "../assets/code-hero-image.jpg";
import Nav from "../components/Nav/Nav";
import TypedText from "../anims/TypedText";
import CurvedLine from "../components/CurvedLine";

//import global styles
import { PageContainer, PageContentContainer } from "../styles/Pages";
// import { useScroll } from "../hooks/scrollY";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectData } from "../util/project-util";
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Dashboard = () => {
  function useParallax(distance) {
    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPos = window.scrollY;
        setOffset(-scrollPos * distance);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [distance]);
  
    return offset;
  }
  
  
  
  
  const projectInfo = ProjectData();
  const { scrollY } = useViewportScroll();
  const heroAnimation = useAnimation();
  // const [isHeadingInView, setIsHeadingInView] = useState(false);
  // const ref = useRef(null);
  // const { scrollXProgress } = useScroll({ target: ref });
  const x = useParallax(0.2);

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

  // const { ref, inView } = useInView({
  //   threshold: 0,
  //   rootMargin: '0px 0px',
  //   triggerOnce: false,
  // });
  // console.log(inView);
  // useEffect(() => {
  //   if (inView) {
  //     setIsHeadingInView(true);
  //   } else{
  //     setIsHeadingInView(false);
  //   }
  // }, [inView]);

  // function useParallax(value, distance) {
  //   return useTransform(value, [0, 1], [-distance, distance]);
  // }

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
          <motion.span style={{x}}>01</motion.span>
          <motion.h2 style={{x}}>My Projects</motion.h2>
        </SectionHeadingContainer>
          <CardsContainer>
            {projectInfo.map((project) => (
              <Card
                key={project.id}
                id={project.id}
                image={project.image.CardPlaceHolderImg}
                title={project.title}
                description={project.description}
              />
            ))}
          </CardsContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default Dashboard;

export const CardsContainer = styled.div`
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
      /* Position the GitHub icon on the left */
      left: 0;
    }
  
    .linkedin {
      /* Position the LinkedIn icon next to the GitHub icon */
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
  svg {
    z-index: 0;
    path{
      z-index: 0;
    }
 
  }
`

export const SectionHeadingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 8rem 0rem 8rem 21rem;
  overflow: hidden; // Add this line
  h2{
    /* margin: auto; */
    font-size: 15rem;
    font-family: "Oswald";
    transform: translateX(100%); // Add this line */
    margin: -5rem 0rem -5rem 0rem
  }
  span{
    font-size: 5rem;
    font-family: "Oswald";
    margin-left: -4.5rem;
    padding: 0;
    margin: -5rem 0rem 0rem 0rem


  }
`;

