
import { SectionHeadingContainer, ButtonLayoutElement } from "../styles/global/Pages";
import { SideBySideContainer, SideBySideContentContainer, ScrollyHeaderWrapper } from "../styles/sections/SideBySide";
import { useParallax } from "../hooks/useParallax";
import useScroll from '../hooks/useScroll';
import AboutMe from '../assets/jacob.jpg';
import { AnimateSharedLayout, motion } from "framer-motion";
import { fadeIn } from "../anims/animations";
import styled from "styled-components";


const AboutButton = styled(ButtonLayoutElement)`
    margin: 0rem 4rem;
`;
const AboutCta = () => {
    const [element, controls] = useScroll();
    const leftOffset = useParallax(0.2, "left");
    return(
        <SideBySideContainer
        variants={fadeIn}
        animate={controls}
        ref={element}
        initial="hidden"
      >
        <AnimateSharedLayout>
            <SideBySideContentContainer style={{backgroundImage: `url(${AboutMe})` ,backgroundSize: 'cover',backgroundPosition: 'center center', height: '100%', backgroundRepeat: 'no-repeat',}}>
            </SideBySideContentContainer>
            <SideBySideContentContainer>
                <SectionHeadingContainer>
                    <ScrollyHeaderWrapper style={{ left: leftOffset }} direction="left">
                        <motion.span style={{color:"white"}}>02</motion.span>
                        <motion.h2 style={{color:"white"}}>About me</motion.h2>
                    </ScrollyHeaderWrapper>
                </SectionHeadingContainer>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et in, esse nesciunt impedit ab saepe quisquam veritatis numquam culpa magnam temporibus doloribus. Minus, corporis aut sunt molestiae ullam quidem.</p>
                <AboutButton>About Me</AboutButton>
            </SideBySideContentContainer>
        </AnimateSharedLayout>
      </SideBySideContainer>
    );

}
export default AboutCta;