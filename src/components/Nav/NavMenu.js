import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../../hooks/scrollY";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "../../assets/jacob.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavMenu = () => {
  const scrollY = useScroll();
  const scrollThreshold = window.innerHeight * 0.1; // 10% of the page height

  return (
    <NavMenuContainer>
      <ProfilePictureContainer>
        <ProfilePictureLogo />
        <p>Jacob Marsay</p>
      </ProfilePictureContainer>
      <MenuItemsContainer>
        <motion.ul>
          <li>About Me</li>
          <li>What I Do</li>
          <li>Projects</li>
          <li>Contact</li>
        </motion.ul>
      </MenuItemsContainer>
      <SocialIconsContainer>
        <FontAwesomeIcon icon={faGithub} size="5x" />
        <FontAwesomeIcon icon={faEnvelope} size="5x" />
        <FontAwesomeIcon icon={faLinkedin} size="5x" />
      </SocialIconsContainer>
    </NavMenuContainer>
  );
};

const NavMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Oswald;
  color: #e3e3e3;
  height: 100%;
`;

const ProfilePictureContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 25%;
  padding: 50px 0;
  p {
    margin-top: 1rem;
    font-size: 3rem;
  }
`;

const MenuItemsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    list-style: none;

    li {
      padding: 1rem;
      font-size: 2rem;
    }
  }
`;

export const ProfilePictureLogo = styled.div`
  border-radius: 50rem;
  width: 20rem;
  height: 20rem;
  background-image: url(${AboutMe});
  background-size: cover;
  background-position: center, center;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 15%;
  width: 75%;
  padding: 20px 0;
`;

export default NavMenu;
