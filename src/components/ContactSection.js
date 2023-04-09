import { SectionHeadingContainer } from "../styles/global/Pages";
import {
  SectionContainer,
  SideBySideContentContainer,
  ScrollyHeaderWrapper,
} from "../styles/sections/SideBySide";
import { useParallax } from "../hooks/useParallax";
import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";
import {
  CenteredSectionDescriptionWrapper,
} from "./AboutMeSection";

const ContactSection = () => {
  const leftOffset = useParallax(0.04, "left");
  return (
    <SectionContainer id="contact">
      <AnimateSharedLayout>
        <SideBySideContentContainer>
          <SectionHeadingContainer>
            <ScrollyHeaderWrapper style={{ left: leftOffset }} direction="left">
              <motion.span style={{ color: "#16191d" }}>05</motion.span>
              <motion.h2 style={{ color: "#16191d" }}>Contact</motion.h2>
            </ScrollyHeaderWrapper>
            <h3>Get In Touch</h3>
          </SectionHeadingContainer>
          <CenteredSectionDescriptionWrapper>
            <FormElement>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>

              <CenteredFormButtonContainer>
                <button type="submit">Submit</button>
              </CenteredFormButtonContainer>
            </FormElement>
          </CenteredSectionDescriptionWrapper>
        </SideBySideContentContainer>
      </AnimateSharedLayout>
    </SectionContainer>
  );
};

export default ContactSection;

export const FormElement = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  input,
  textarea {
    border-radius: 1rem;
    font-family: "Poppins", sans-serif;
    padding: 1rem;
    background: #16191d;
    border: solid 2px #7b7b7b;
    color: #7b7b7b;
    transition: 0.5s;
    &:hover {
      border: solid 2px #088f8f;
    }
    &:focus {
      outline: #088f8f;
    }
  }
  input {
    width: 41%;
    margin: 2rem;
    height: 3rem;

    @media (max-width: 750px) {
      width: 100%;
    }
  }
  textarea {
    width: 90%;
    margin: 0rem 3rem 2rem 2rem;
  }

`;
export const CenteredFormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    width: 25%;
    padding: 2rem 4rem;
    border-radius: 3rem;
    margin: 1rem auto;
    transition: 0.5s;
    border: solid 2px #7b7b7b;
    background: #16191d;
    font-family: "Poppins";
    color: #d1d1d1;
    text-align: center;
    &:hover {
      border: solid 2px #088f8f;
      background: #088f8f;
      color: #d1d1d1;
    }
    &:focus {
      outline: #088f8f;
    }
    @media (max-width: 750px) {
      width: 90%;
    }
  }
`;
