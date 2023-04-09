import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <CardContainer>
      <Link to={`/projects/${props.title}/${props.id}`}>
        <img src={props.image} alt="Dummy Image" />
        <CardContentContainer>
          <CardTitleContainer>
            <h3>{props.title}</h3>
          </CardTitleContainer>
          <CardDescriptionContainer>
            <p>{props.description}</p>
          </CardDescriptionContainer>
        </CardContentContainer>
      </Link>
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
  img {
    width: 100%;
    height: 100%;
  }

  :hover {
    cursor: pointer;
  }
  @media (max-width: 850px){
    width: 90%;
  }
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: #16191d;
  color: #d1d1d1;
  h3{
    color: #088f8f;
    padding-bottom: 1rem
  }
`;

const CardTitleContainer = styled.div``;
const CardDescriptionContainer = styled.div``;
