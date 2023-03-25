import React from "react";

// Toggle Component
import Toggle from "./Toggle";

// Import Styles
import styled from "styled-components";

// Animate Motion Imports
import { motion, AnimateSharedLayout } from "framer-motion";
import { scaleSection } from "../../../anims/animations";
import useScroll from "../../../hooks/useScroll";

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <FaqContainer
      variants={scaleSection}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <h2>
        Any Questions?<span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              aspernatur deleniti id officia eligendi optio, aliquam iusto amet
              deserunt soluta dolorum quia reiciendis labore, voluptatem quas,
              alias quibusdam dolore! Sed.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Is Dailey Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              aspernatur deleniti id officia eligendi optio, aliquam iusto amet
              deserunt soluta dolorum quia reiciendis labore, voluptatem quas,
              alias quibusdam dolore! Sed.
            </p>
          </div>
        </Toggle>
        <Toggle title="Payment Methods?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              aspernatur deleniti id officia eligendi optio, aliquam iusto amet
              deserunt soluta dolorum quia reiciendis labore, voluptatem quas,
              alias quibusdam dolore! Sed.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              aspernatur deleniti id officia eligendi optio, aliquam iusto amet
              deserunt soluta dolorum quia reiciendis labore, voluptatem quas,
              alias quibusdam dolore! Sed.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqContainer>
  );
}

const FaqContainer = styled(motion.div)`
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  display: block;

  // Mobile
  @media (min-width: 280px) and (max-width: 540px) {
    width: 100%;
    padding: 5rem;
  }

  span {
    display: block;
  }
  h4 {
    color: #ffffff;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq__line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
