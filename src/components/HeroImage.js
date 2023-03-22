import { motion } from "framer-motion";
import styled from "styled-components";

const HeroImage = ({heroImage} ) => {
    return(
        <HeroImageContainer>
            <img src={heroImage} alt="" />
        </HeroImageContainer>
    )
}

const HeroImageContainer = styled(motion.div)`
    display: flex;
    position: relative;
    height: 100vh;
    img{
        filter: brightness(20%);
        width: 100%;
    }

`
export default HeroImage;