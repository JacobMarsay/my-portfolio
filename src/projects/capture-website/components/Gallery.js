import React from "react";
import styled from "styled-components";

function Gallery({ image }) {
  return (
    <GalleriesContainter>
      <img src={image} alt="Gallery" />
    </GalleriesContainter>
  );
}

const GalleriesContainter = styled.div`
  padding: 8rem 3rem;
  img {
    width: 100%;
    height: 80vh;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  @media (max-width: 280px) {
    img {
      object-fit: cover;
    }
  }
`;
export default Gallery;
