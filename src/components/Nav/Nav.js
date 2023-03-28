import NavMenu from "./NavMenu";
import styled from "styled-components";
import { navMenuSize } from "../../anims/animations";
import { motion } from "framer-motion";
import { useScroll } from "../../hooks/scrollY";

const Nav = () => {
  return (
    <NavContainer>
      <NavMenu />
    </NavContainer>
  );
};

const NavContainer = styled(motion.div)`
  width: 15%;
  background: #303030;
  position: fixed;
  left: 0;
  height: 100vh;
  z-index: 2;
  overflow-x: hidden;
`;

export default Nav;
