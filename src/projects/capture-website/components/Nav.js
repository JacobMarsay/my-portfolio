import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <NavContainer>
      <h1>
        <Link id="logo" to="/projects/Photography%20Website/2">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/projects/Photography%20Website/2">1. About Us</Link>
          <ActiveLinkAnim
            initial={{ width: "0%" }}
            transition={{ duration: 0.75 }}
            animate={{ width: pathname === "/projects/Photography%20Website/2" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects/Photography%20Website/2/work">2. Our Work</Link>
          <ActiveLinkAnim
            initial={{ width: "0%" }}
            transition={{ duration: 0.75 }}
            animate={{ width: pathname === "/projects/Photography%20Website/2/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects/Photography%20Website/2/contact">3. Contact Us</Link>
          <ActiveLinkAnim
            initial={{ width: "0%" }}
            transition={{ duration: 0.75 }}
            animate={{ width: pathname === "/projects/Photography%20Website/2/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  min-height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  z-index: 30;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.3rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 0rem 0rem 0rem 10rem;
    position: relative;
    // Tablet
    @media (min-width: 768px) and (max-width: 912px) {
      padding: 3rem;
    }
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  // Mobile
  @media (min-width: 280px) and (max-width: 767px) {
    flex-direction: column;
    padding: 2rem 0rem;

    ul {
      width: 100%;
      justify-content: space-around;
      padding-top: 1rem;

      li {
        padding: 1rem;

        a {
          font-size: 1rem;
        }
      }
    }
  }
`;

const ActiveLinkAnim = styled(motion.div)`
  position: absolute;
  height: 0.3rem;
  background: #23d997;
  left: 55%;
  top: 120%;
  @media (min-width: 767px) and (max-width: 912px) {
    left: 30%;
    top: 65%;
  }
  @media (min-width: 280px) and (max-width: 766px) {
    left: 25%;
    top: 70%;
  }
`;

export default Nav;
