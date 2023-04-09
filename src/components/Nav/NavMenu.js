import styled from "styled-components";
import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "../../assets/jacob.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll';

const NavMenu = ({setIsOpen}) => {
  return (
    <NavMenuContainer>
      <ProfilePictureContainer>
        <ProfilePictureLogo />
        <p>Jacob Marsay</p>
      </ProfilePictureContainer>
      <MenuItemsContainer>
        <motion.ul>
          <li>
            <Link to="about-me" onClick={()=> {setIsOpen(false)}} smooth={true} offset={0}>01 About Me</Link>
          </li>
          <li>
            <Link to="services" onClick={()=> {setIsOpen(false)}} smooth={true} offset={0}>02 Services</Link>
          </li>
          <li>
            <Link to="curriculum" onClick={()=> {setIsOpen(false)}} smooth={true} offset={0}>03 Curriculum</Link>
          </li>
          <li>
            <Link to="my-projects" onClick={()=> {setIsOpen(false)}} smooth={true} offset={0}>04 My Projects</Link>
          </li>
          <li>
            <Link to="contact" onClick={()=> {setIsOpen(false)}} smooth={true} offset={0}>05 Contact</Link>
          </li>
        </motion.ul>
      </MenuItemsContainer>
      <SocialIconsContainer>
        <FontAwesomeIcon icon={faGithub} size="3x" />
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
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
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    li {
      padding: 1.5rem;
      font-size: 2.5rem;

      a{
        color: #fff;
        &:hover{
          color: #088f8f;
        }
      }
    }
  }
`;

export const ProfilePictureLogo = styled.div`
  border: solid 0.5rem grey;
  border-radius: 100%;
  width: 100%;
  height: 0;
  padding-top: 100%; /* use the same value as the width to create a circular aspect ratio */

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
