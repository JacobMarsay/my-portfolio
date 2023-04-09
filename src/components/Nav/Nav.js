import NavMenu from "./NavMenu";
import styled from "styled-components";
import { motion } from "framer-motion";
import NavMenuButton from "./NavMenuButton";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <NavContainer>
      <SideNavContainer>
        <NavMenu setIsOpen={setIsOpen} />
      </SideNavContainer>
      <ResposiveNavContainer>
        <NavMenuButton setIsOpen={setIsOpen} isOpen={isOpen}/>
        {isOpen 
          ?
            <ResposiveNavContentContainer>
              <NavMenu setIsOpen={setIsOpen} />
            </ResposiveNavContentContainer>
          : ''
        }

      </ResposiveNavContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div `
  display: flex;
`

const SideNavContainer = styled(motion.div)`
  width: 15%;
  background: #111418;
  position: fixed;
  left: 0;
  height: 100vh;
  z-index: 2;
  overflow-x: hidden;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 1250px) {
    display:none;
  }
`;

const ResposiveNavContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  z-index: 5;
  @media (min-width: 1249px){
    display:none;
  }
`
const ResposiveNavContentContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: #111418f3;
  overflow-x: hidden;
  @media (min-width: 1249px){
    display:none;
  }
`

export default Nav;
