import React from "react";
import {
  SectionContainerLight,
  ScrollyHeaderWrapper,
} from "../styles/sections/SideBySide";
import { useParallax } from "../hooks/useParallax";
import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";
import {
  faRocket,
  faPalette,
  faGear,
  faCube,
  faBook,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionHeadingContainer } from "../styles/global/Pages";

const ServiceSection = () => {
  const rightOffset = useParallax(0.1, "right");
  return (
    <SectionContainerLight>
      <AnimateSharedLayout>
        <SectionHeadingContainer>
          <ScrollyHeaderWrapper
            style={{ right: rightOffset }}
            direction="right"
          >
            <motion.span style={{ color: "#16191d" }}>02</motion.span>
            <motion.h2 style={{ color: "#16191d" }}>Services</motion.h2>
          </ScrollyHeaderWrapper>
          <h3>What I Do</h3>
        </SectionHeadingContainer>
      </AnimateSharedLayout>
      <FlexCenterContainer>
        <FlexColumnContainer>
          <FlexRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faBook} size="4x" />
            </IconContainer>
            <IconContentContainer>
              <h4>Learning & Development</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </FlexRowContainer>
        </FlexColumnContainer>
        <FlexColumnContainer>
          <FlexRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faComment} size="4x" />
            </IconContainer>

            <IconContentContainer>
              <h4>Risks & Requirements</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </FlexRowContainer>
        </FlexColumnContainer>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <FlexColumnContainer>
          <FlexRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faGear} size="4x" />
            </IconContainer>
            <IconContentContainer>
              <h4>DevOps</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </FlexRowContainer>
        </FlexColumnContainer>
        <FlexColumnContainer>
          <FlexRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faPalette} size="4x" />
            </IconContainer>
            <IconContentContainer>
              <h4>Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </FlexRowContainer>
        </FlexColumnContainer>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <FlexColumnContainer>
          <FlexRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faCube} size="4x" />
            </IconContainer>
            <IconContentContainer>
              <h4>Programming</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </FlexRowContainer>
        </FlexColumnContainer>
        <FlexColumnContainer>
          <FlexRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faRocket} size="4x" />
            </IconContainer>
            <IconContentContainer>
              <h4>Deployment</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </FlexRowContainer>
        </FlexColumnContainer>
      </FlexCenterContainer>
    </SectionContainerLight>
  );
};
export default ServiceSection;

export const FlexCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  margin-right: 1.5rem;
  background: #111418;
  svg {
    color: #088f8f;
  }
`;

export const IconContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p,
  h4 {
    color: #d1d1d1;
  }
  h4 {
    font-size: 3rem;
    padding-bottom: 1rem;
  }
`;
