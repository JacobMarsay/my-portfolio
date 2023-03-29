import React from "react";
import {
  SectionContainerLight,
  SideBySideContentContainer,
  ScrollyHeaderWrapper,
} from "../styles/sections/SideBySide";
import { useParallax } from "../hooks/useParallax";
import useScroll from "../hooks/useScroll";
import { AnimateSharedLayout, motion } from "framer-motion";
import { fadeIn } from "../anims/animations";
import styled from "styled-components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faRocket,
  faPalette,
  faGear,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionHeadingContainer } from "../styles/global/Pages";

const ServiceSection = () => {
  const [element, controls] = useScroll();
  const rightOffset = useParallax(0.1, "right");
  return (
    <SectionContainerLight
      variants={fadeIn}
      animate={controls}
      ref={element}
      initial="hidden"
    >
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
      <IconBlockContainer>
        <IconColumnContainer>
          <IconRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faGear} size="4x" />
            </IconContainer>
            <IconContentContainer>
              <h4>Testto</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </IconRowContainer>
        </IconColumnContainer>
        <IconColumnContainer>
          <IconRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faPalette} size="4x" />
            </IconContainer>
            <IconContentContainer>
              <h4>Testto</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </IconRowContainer>
        </IconColumnContainer>
      </IconBlockContainer>
      <IconBlockContainer>
        <IconColumnContainer>
          <IconRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faCube} size="4x" />
            </IconContainer>
            <IconContentContainer>
              <h4>Testto</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </IconRowContainer>
        </IconColumnContainer>
        <IconColumnContainer>
          <IconRowContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faRocket} size="4x" />
            </IconContainer>

            <IconContentContainer>
              <h4>Testto</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur aliquam ea a adipisci natus expedita iusto sunt hic
                placeat possimus! Magni incidunt nostrum amet eveniet cum
                molestias optio. Nemo, quidem?
              </p>
            </IconContentContainer>
          </IconRowContainer>
        </IconColumnContainer>
      </IconBlockContainer>
    </SectionContainerLight>
  );
};
export default ServiceSection;

export const IconBlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const IconColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem;
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

export const IconRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
