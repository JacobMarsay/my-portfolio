import React from "react";
import {
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from "./ServicesSection";
import { IconContainer, IconContentContainer } from "./ServicesSection";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faLaravel,
  faPhp,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const SubSectionContainer = styled(FlexCenterContainer)`
  width: 80%;
  margin: 5rem 0rem;
  h3 {
    color: #d1d1d1;
  }
`;

const TechnologyIconContainer = styled(IconContainer)`
  background: none;
  padding: 0;
  justify-content: flex-start;
`;

const TechnologyCardContainer = styled.div`
  margin: 4rem 2rem 0rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10rem;
  background: #16191d;

  h5 {
    color: #fff;
    font-size: 2rem;
  }
`;

const SkillsSubSection = () => {
  return (
    <SubSectionContainer>
      <FlexColumnContainer>
        <h3>Technologies</h3>
        <FlexRowContainer>
          <TechnologyCardContainer>
            <TechnologyIconContainer>
              <FontAwesomeIcon icon={faLaravel} size="4x" />
            </TechnologyIconContainer>
            <IconContentContainer>
              <h5>Laravel</h5>
            </IconContentContainer>
          </TechnologyCardContainer>
          <TechnologyCardContainer>
            <TechnologyIconContainer>
              <FontAwesomeIcon icon={faPhp} size="4x" />
            </TechnologyIconContainer>
            <IconContentContainer>
              <h5>Php</h5>
            </IconContentContainer>
          </TechnologyCardContainer>
          <TechnologyCardContainer>
            <TechnologyIconContainer>
              <FontAwesomeIcon icon={faJava} size="4x" />
            </TechnologyIconContainer>
            <IconContentContainer>
              <h5>Java</h5>
            </IconContentContainer>
          </TechnologyCardContainer>
          <TechnologyCardContainer>
            <TechnologyIconContainer>
              <FontAwesomeIcon icon={faJs} size="4x" />
            </TechnologyIconContainer>
            <IconContentContainer>
              <h5>Java Script</h5>
            </IconContentContainer>
          </TechnologyCardContainer>
        </FlexRowContainer>
        <FlexRowContainer>
          <TechnologyCardContainer>
            <TechnologyIconContainer>
              <FontAwesomeIcon icon={faReact} size="4x" />
            </TechnologyIconContainer>
            <IconContentContainer>
              <h5>React</h5>
            </IconContentContainer>
          </TechnologyCardContainer>
          <TechnologyCardContainer>
            <TechnologyIconContainer>
              <FontAwesomeIcon icon={faHtml5} size="4x" />
            </TechnologyIconContainer>
            <IconContentContainer>
              <h5>HTML</h5>
            </IconContentContainer>
          </TechnologyCardContainer>
          <TechnologyCardContainer>
            <TechnologyIconContainer>
              <FontAwesomeIcon icon={faCss3} size="4x" />
            </TechnologyIconContainer>
            <IconContentContainer>
              <h5>CSS</h5>
            </IconContentContainer>
          </TechnologyCardContainer>
          <TechnologyCardContainer>
            <TechnologyIconContainer>
              <FontAwesomeIcon icon={faSass} size="4x" />
            </TechnologyIconContainer>
            <IconContentContainer>
              <h5>Sass</h5>
            </IconContentContainer>
          </TechnologyCardContainer>
        </FlexRowContainer>
      </FlexColumnContainer>
    </SubSectionContainer>
  );
};

export default SkillsSubSection;
