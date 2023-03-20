import React from "react";
import styled from "styled-components";

function Awards({ title, description }) {
  return (
    <AwardContainer>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardContainer>
  );
}

const AwardContainer = styled.div`
  padding: 3rem;
  h3 {
    font-size: 3rem;
  }

  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

export default Awards;
