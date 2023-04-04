import React from "react";
import {
  SectionContainer,
  ScrollyHeaderWrapper,
} from "../styles/sections/SideBySide";
import { useParallax } from "../hooks/useParallax";
import useScroll from "../hooks/useScroll";
import { AnimateSharedLayout, motion } from "framer-motion";
import { fadeIn } from "../anims/animations";
import styled from "styled-components";
import { SectionHeadingContainer } from "../styles/global/Pages";
import {
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from "./ServicesSection";

import SkillsSubSection from "./SkillsSubSection";

const FlexColumnContainerExperience = styled(FlexColumnContainer)`
  background: #111418;
  margin: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 1rem;

  h3,
  p {
    font-family: "Poppins";
    color: #d1d1d1;
  }

  h3 {
    margin-top: 1rem;
  }
`;

const FlexExperienceContainer = styled(FlexCenterContainer)`
  width: 100%;
`;

const ExperienceSection = () => {
  const [element, controls] = useScroll();
  const leftOffset = useParallax(0.1, "left");
  return (
    <SectionContainer
      id="curriculum"
      variants={fadeIn}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <AnimateSharedLayout>
        <SectionHeadingContainer>
          <ScrollyHeaderWrapper style={{ left: leftOffset }} direction="left">
            <motion.span style={{ color: "#16191d" }}>03</motion.span>
            <motion.h2 style={{ color: "#16191d" }}>Curriculum</motion.h2>
          </ScrollyHeaderWrapper>
          <h3>Eduction And Experience</h3>
        </SectionHeadingContainer>
      </AnimateSharedLayout>
      <ExperianceWrapper>
        <FlexExperienceContainer>
          <FlexRowContainer>
            <FlexColumnContainerExperience>
              <ExperianceYearContainer>
                <p>2018-2022</p>
              </ExperianceYearContainer>
              <h3>BSc Computing</h3>
              <InstitutionContainer>
                <p>
                  <b>Sheffield Hallam University</b>
                </p>
              </InstitutionContainer>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt, in ullam minima corrupti, omnis consectetur quia
                accusamus dicta, quaerat illum reiciendis hic ea optio. Quaerat
                tempora cum excepturi dolore quam!
              </p>
            </FlexColumnContainerExperience>
            <FlexColumnContainerExperience>
              <ExperianceYearContainer>
                <p>2022-Present</p>
              </ExperianceYearContainer>
              <h3>Junior Developer</h3>
              <InstitutionContainer>
                <p>
                  <b>Calls9</b>
                </p>
              </InstitutionContainer>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt, in ullam minima corrupti, omnis consectetur quia
                accusamus dicta, quaerat illum reiciendis hic ea optio. Quaerat
                tempora cum excepturi dolore quam!
              </p>
            </FlexColumnContainerExperience>
          </FlexRowContainer>
        </FlexExperienceContainer>
        <FlexExperienceContainer>
          <FlexRowContainer>
            <FlexColumnContainerExperience>
              <ExperianceYearContainer>
                <p>2017-2018</p>
              </ExperianceYearContainer>
              <h3>Computer Programming</h3>
              <InstitutionContainer>
                <p>
                  <b>Sheffield Hallam University</b>
                </p>
              </InstitutionContainer>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt, in ullam minima corrupti, omnis consectetur quia
                accusamus dicta, quaerat illum reiciendis hic ea optio. Quaerat
                tempora cum excepturi dolore quam!
              </p>
            </FlexColumnContainerExperience>
            <FlexColumnContainerExperience>
              <ExperianceYearContainer>
                <p>2019-2020</p>
              </ExperianceYearContainer>
              <h3>Web Designer</h3>
              <InstitutionContainer>
                <p>
                  <b>Xune Solutions</b>
                </p>
              </InstitutionContainer>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt, in ullam minima corrupti, omnis consectetur quia
                accusamus dicta, quaerat illum reiciendis hic ea optio. Quaerat
                tempora cum excepturi dolore quam!
              </p>
            </FlexColumnContainerExperience>
          </FlexRowContainer>
        </FlexExperienceContainer>
        <SkillsSubSection />
      </ExperianceWrapper>
    </SectionContainer>
  );
};
export default ExperienceSection;

export const ExperianceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

export const ExperianceYearContainer = styled.div`
  padding: 0.5rem 1rem;
  background: #088f8f;
  border-radius: 2rem;
  p {
    color: #fff;
  }
`;

export const InstitutionContainer = styled.div`
  margin: 1rem 0rem;
  p {
    color: #088f8f;
  }
`;
