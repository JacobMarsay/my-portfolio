import NavMenu from "./NavMenu";
import styled from "styled-components";
import { navMenuSize } from "../../anims/animations";
import { motion } from "framer-motion";
import { useScroll } from "../../hooks/scrollY";

const Nav = () => {
    const scrollY = useScroll();
    const scrollThreshold = window.innerHeight * 0.1; // 10% of the page height
    return(
        <NavContainer
        
        initial="normal"
        animate={scrollY > scrollThreshold ? 'shrink' : 'normal'}
        variants={navMenuSize}>
            <NavMenu />
        </NavContainer>
    )
}

const NavContainer = styled(motion.div) `
    width: 100%;
    background: #30303075;;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`

export default Nav;