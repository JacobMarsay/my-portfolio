import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CardPlaceHolderImg from "../../assets/placeholders/card-placeholder.png";

const Card = () => {
  return (
    <CardContainer>
      <img src={CardPlaceHolderImg} alt="Dummy Image" />
      <CardContentContainer>
        <div className="card__title">
          <h3>Test Title Project</h3>
        </div>
        <div className="card__description">
          <p>A short description that describes this project</p>
        </div>
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;

// Styles
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2rem;
  overflow: hidden;
  width: 30%;
  margin: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  :hover {
    cursor: pointer;
  }
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`;
