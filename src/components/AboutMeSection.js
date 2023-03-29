import {
  SectionHeadingContainer,
  ButtonLayoutElement,
} from "../styles/global/Pages";
import {
  SideBySideContainer,
  SideBySideContentContainer,
  ScrollyHeaderWrapper,
} from "../styles/sections/SideBySide";
import { useParallax } from "../hooks/useParallax";
import useScroll from "../hooks/useScroll";
import AboutMe from "../assets/jacob.jpg";
import { AnimateSharedLayout, motion } from "framer-motion";
import { fadeIn } from "../anims/animations";
import styled from "styled-components";

const AboutButton = styled(ButtonLayoutElement)`
  margin: 0rem 4rem;
`;
const AboutMeSection = () => {
  const [element, controls] = useScroll();
  const leftOffset = useParallax(0.1, "left");
  return (
    <SideBySideContainer
      variants={fadeIn}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <AnimateSharedLayout>
        <SideBySideContentContainer>
          <SectionHeadingContainer>
            <ScrollyHeaderWrapper style={{ left: leftOffset }} direction="left">
              <motion.span style={{ color: "#dee3e4" }}>01</motion.span>
              <motion.h2 style={{ color: "#dee3e4" }}>About me</motion.h2>
            </ScrollyHeaderWrapper>
            <h3>Know Me More</h3>
          </SectionHeadingContainer>
          <CenteredSectionDescriptionWrapper>
            <CenteredSectionDescription>
              <h4>
                I'm <span>Jacob Marsay</span>, a Junior Developer
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et
                in, esse nesciunt impedit ab saepe quisquam veritatis numquam
                culpa magnam temporibus doloribus. Minus, corporis aut sunt
                molestiae ullam quidem.
              </p>
            </CenteredSectionDescription>
            <InfoTableContainerWrapper>
              <InfoTableContainer>
                <p>
                  <b>Name:</b> Jacob Marsay
                </p>
              </InfoTableContainer>
              <InfoTableContainer>
                <p>
                  <b>Email:</b> devmars@outlook.com
                </p>
              </InfoTableContainer>
              <InfoTableContainer>
                <p>
                  <b>Age:</b> 25
                </p>
              </InfoTableContainer>
              <InfoTableContainer>
                <p>
                  <b>Location:</b> Bradford, West Yorkshire, England
                </p>
              </InfoTableContainer>
            </InfoTableContainerWrapper>
          </CenteredSectionDescriptionWrapper>
        </SideBySideContentContainer>
      </AnimateSharedLayout>
    </SideBySideContainer>
  );
};

export default AboutMeSection;

export const CenteredSectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 50%;
  p,
  h4 {
    margin: 0rem 4rem;
    font-family: "Poppins";
    padding-bottom: 2rem;
  }
`;

export const CenteredSectionDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InfoTableContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTableContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: solid #dee3e4;
  padding: 0.5rem 0rem;
`;
