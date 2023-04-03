import styled from "styled-components";
import FooterItems from "./FooterItems";

const FooterContainer = styled.div`
  display: flex;
  background: #111418;
  padding: 5rem 0rem;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems />
    </FooterContainer>
  );
};

export default Footer;
