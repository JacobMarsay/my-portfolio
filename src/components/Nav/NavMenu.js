import styled from "styled-components";
import { motion} from "framer-motion";
import { useScroll } from "../../hooks/scrollY";
import { navMenuVarient } from "../../anims/animations";

const NavMenu = () => {
    const scrollY = useScroll();
    const scrollThreshold = window.innerHeight * 0.1; // 10% of the page height

    return (
      <NavMenuContainer>
        <LogoTextContainer

        >
          <motion.div>
            <motion.p
                initial="normal"
                animate={scrollY > scrollThreshold ? 'shrink' : 'normal'}
                variants={navMenuVarient}
            >
              <span>Jacob Marsay</span>
              <span>Web App Development</span>
              <span>Portfolio 2023 ©</span>
            </motion.p>
          </motion.div>
        </LogoTextContainer>
        <MenuItemsContainer
>
            <motion.ul
                initial="normal"
                animate={scrollY > scrollThreshold ? 'shrink' : 'normal'}
                variants={navMenuVarient}
            >
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact</li>
            </motion.ul>
        </MenuItemsContainer>
      </NavMenuContainer>
    );
  };

const NavMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0rem 2rem 0rem 2rem;
  height: 11vh;
  font-family: Oswald;
  color: #e3e3e3;
`;

const LogoTextContainer = styled(motion.div)`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  span {
    display: block;
  }
`;

const MenuItemsContainer = styled(motion.div)`
  display: flex;
  width: 30%;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;

    li {
      padding: 1rem;
    }
  }
`;

export default NavMenu;