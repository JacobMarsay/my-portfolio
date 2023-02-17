import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CardPlaceHolderImg from "../../assets/placeholders/card-placeholder.png";

const Card = (props) => {
  return (
    <CardContainer>
      <img src={props.image} alt="Dummy Image" />
      <CardContentContainer>
        <CardTitleContainer>
          <h3>{props.title}</h3>
        </CardTitleContainer>
        <CardDescriptionContainer>
          <p>{props.description}</p>
        </CardDescriptionContainer>
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

const CardTitleContainer = styled.div``;
const CardDescriptionContainer = styled.div``;
