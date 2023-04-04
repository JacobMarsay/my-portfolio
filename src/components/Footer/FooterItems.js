import styled from "styled-components";
import { Link } from 'react-scroll';

const FooterItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    color: #088f8f;
  }

  P,
  li {
    color: #d1d1d1;
  }

  li {
    padding: 0rem 2rem;
    font-size: 1.5rem;
    border-right: 2px solid #d1d1d1;
    &:nth-child(5) {
      border: none;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    li {
      list-style: none;
      font-family: "Oswald";
      a{
        color: #fff;
        &:hover{
          color: #088f8f;
        }
      }
    }
  }
`;

const FooterItems = () => {
  return (
    <>
      <FooterItemsContainer>
        <p>
          Copyright &copy; 2023 <span>Jacob Marsay</span>. All Rights Resevered.
        </p>
      </FooterItemsContainer>
      <FooterItemsContainer>
        <ul>
          <li>
            <Link to="about-me" smooth={true} offset={0}>01 About Me</Link>
          </li>
          <li>
            <Link to="services" smooth={true} offset={0}>02 Services</Link>
          </li>
          <li>
            <Link to="curriculum" smooth={true} offset={0}>03 Curriculum</Link>
          </li>
          <li>
            <Link to="my-projects" smooth={true} offset={0}>04 My Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={0}>05 Contact</Link>
          </li>
        </ul>
      </FooterItemsContainer>
    </>
  );
};

export default FooterItems;
