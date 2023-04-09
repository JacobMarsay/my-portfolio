import styled from "styled-components";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavMenuButtonContainer = styled.div`
  position: relative;
  width: 100%;
  button {
    position: absolute;
    margin-top: 5rem;
    right: 5%;
    padding: 1rem 4rem;
    border: 2px solid #fff;
    color: #fff;
    background: none;
    border-radius: 5rem;
    font-size: 2rem;
    z-index: 20;
    &:active{
        background: #088f8f;

    }
  }
`;

const NavMenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <NavMenuButtonContainer>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen 
        ? 
            <FontAwesomeIcon icon={faClose} size="1x"/>
        :
            <FontAwesomeIcon icon={faBars} size="1x"/>}
      </button>
    </NavMenuButtonContainer>
  );
};

export default NavMenuButton;
