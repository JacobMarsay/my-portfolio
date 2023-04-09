import { SectionHeadingContainer } from "../styles/global/Pages";
import {
  SectionContainer,
  SideBySideContentContainer,
  ScrollyHeaderWrapper,
} from "../styles/sections/SideBySide";
import { useParallax } from "../hooks/useParallax";
import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIconsContainer } from "./Nav/NavMenu";

const AboutMeSection = () => {
  const leftOffset = useParallax(0.1, "left");
  return (
    <SectionContainer id="about-me">
      <AnimateSharedLayout>
        <SideBySideContentContainer>
          <SectionHeadingContainer>
            <ScrollyHeaderWrapper style={{ left: leftOffset }} direction="left">
              <motion.span style={{ color: "#16191d" }}>01</motion.span>
              <motion.h2 style={{ color: "#16191d" }}>About me</motion.h2>
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
              <SocialIconsTableContainer>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </SocialIconsTableContainer>
            </InfoTableContainerWrapper>
          </CenteredSectionDescriptionWrapper>
        </SideBySideContentContainer>
      </AnimateSharedLayout>
    </SectionContainer>
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
    color: #d1d1d1;
  }
  span {
    color: #088f8f;
  }
  @media (max-width: 600px) {
    width:100%;
    margin-bottom: 2rem;
  }
`;

export const CenteredSectionDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    width:100%
  }
`;

export const InfoTableContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #d1d1d1;
  @media (max-width: 600px) {
    flex-direction: column;
    width:80%
  }
`;

export const InfoTableContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: solid #16191d;
  padding: 1rem 0rem;
`;

export const SocialIconsTableContainer = styled(SocialIconsContainer)`
  justify-content: flex-start;
  svg {
    :nth-child(2) {
      margin-left: 1rem;
    }
  }
`;
