import React from "react";
import { scaleSection } from "../animations";
import styled from "styled-components";
import { motion } from "framer-motion";

function ContactForm() {
  return (
    <FormContainer variants={scaleSection} initial="hidden" animate="show">
      <Form>
        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Please type in your message here"
        ></textarea>
        <button type="submit">Send Message</button>
      </Form>
    </FormContainer>
  );
}

const FormContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: #3232329b;
  border-radius: 4rem;
  padding: 5rem;
  width: 60%;
  @media (min-width: 900px) and (max-width: 1277px) {
    padding: 3rem;
  }
  @media (min-width: 501px) and (max-width: 899px) {
    padding: 2rem;
  }
  @media (min-width: 280px) and (max-width: 500px) {
    width: 90%;
    padding: 1rem;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  input,
  textarea {
    border-radius: 1rem;
    font-family: "Inter", sans-serif;
    padding: 1rem;
    background: #3232329b;
    border: solid 2px #7b7b7b;
    color: #7b7b7b;
    transition: 0.5s;
    &:hover {
      border: solid 2px #23d997;
    }
    &:focus {
      outline: #23d997;
    }
  }
  input {
    width: 44%;
    margin: 2rem;
    height: 3rem;
  }
  textarea {
    width: 100%;
    margin: 0rem 3rem 2rem 2rem;
  }
  button {
    width: 100%;
    border-radius: 3rem;
    margin: 1rem 2rem;
  }
  @media (min-width: 280px) and (max-width: 1277px) {
    input,
    textarea,
    button {
      width: 100%;
    }
  }
`;

export default ContactForm;
