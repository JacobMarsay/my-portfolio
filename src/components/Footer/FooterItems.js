import styled from "styled-components";

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
    }
  }
`;

const FooterItems = () => {
  return (
    <>
      <FooterItemsContainer>
        <p>
          Copyright &copy 2023 <span>Jacob Marsay</span>. All Rights Resevered.
        </p>
      </FooterItemsContainer>
      <FooterItemsContainer>
        <ul>
          <li>01 About Me</li>
          <li>02 Services</li>
          <li>03 Curriculum</li>
          <li>04 My Projects</li>
          <li>05 Contact</li>
        </ul>
      </FooterItemsContainer>
    </>
  );
};

export default FooterItems;
