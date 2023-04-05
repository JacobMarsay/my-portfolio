//Import components
import Card from "../components/Cards/Card";

//import global styles
import { SectionHeadingContainer } from "../styles/global/Pages";
import { SectionContainerLight } from "../styles/sections/SideBySide";
import { FlexCenterContainer } from "./ServicesSection";
import { ScrollyHeaderWrapper } from "../styles/sections/SideBySide";
import { ProjectData } from "../util/project-util";
import { scaleSection } from "../anims/animations";
import useScroll from "../hooks/useScroll";
import { useParallax } from "../hooks/useParallax";
import { CardsContainer } from "../pages/Dashboard";
import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

const CenteredTextContainer = styled(FlexCenterContainer)`
  margin: 4rem 0rem;
  p {
    text-align: center;
    color: #fff;
  }
`;
const ProjectSection = () => {
  const [element, controls] = useScroll();
  const rightOffset = useParallax(0.05, "right");
  const projectInfo = ProjectData();
  return (
    <SectionContainerLight id="my-projects">
      <SectionHeadingContainer>
        <ScrollyHeaderWrapper style={{ right: rightOffset }} direction="right">
          <motion.span style={{ color: "#16191d" }}>04</motion.span>
          <motion.h2 style={{ color: "#16191d" }}>My Projects</motion.h2>
        </ScrollyHeaderWrapper>
        <h3>Portfolio Pieces</h3>
      </SectionHeadingContainer>
      <CenteredTextContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          voluptate praesentium cupiditate aliquam, illo atque deleniti
          consequatur quia minus recusandae, veritatis iure fugiat quisquam.
          Commodi dolorem numquam culpa architecto? Reiciendis.
        </p>
      </CenteredTextContainer>
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
    </SectionContainerLight>
  );
};

export default ProjectSection;
