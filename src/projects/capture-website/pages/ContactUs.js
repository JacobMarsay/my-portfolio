import React from "react";
import { motion } from "framer-motion";
import { scaleSection } from "../animations";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import Wave from "../components/Wave";

function ContactUs() {
  return (
    <ContactContainer>
      <TitleContainer>
        <motion.h2 variants={scaleSection} initial="hidden" animate="show">
          Contact Us
        </motion.h2>
      </TitleContainer>
      <ContactForm />
      <WaveContainer>
        <Wave />
      </WaveContainer>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  position: relative;
  padding-top: 10rem;
  height: 90vh;
  width: 100%;
`;

const TitleContainer = styled.div`
  padding: 5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    padding-left: 2rem;
  }
`;
const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 35%;
  bottom: 0;
  margin: auto;
  z-index: -1;
`;

export default ContactUs;
