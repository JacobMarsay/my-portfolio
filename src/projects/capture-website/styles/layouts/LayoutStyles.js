import styled from "styled-components";

// Styled Components
export const SideBySideContainer = styled.div`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`;

export const DescriptionContainer = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (min-width: 280px) and (max-width: 569px) {
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  z-index: 2;
  flex: 1;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    @media (min-width: 280px) and (max-width: 970px) {
      width: 100%;
      height: 50vh;
    }
  }
`;

export const HideContainer = styled.div`
  overflow: hidden;
`;
