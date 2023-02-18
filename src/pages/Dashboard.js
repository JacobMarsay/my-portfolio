import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Import components
import Card from "../components/Cards/Card";

//import global styles
import { PageContainer, PageContentContainer } from "../styles/Pages";

import { ProjectData } from "../util/project-util";

const Dashboard = () => {
  const projectInfo = ProjectData();
  return (
    <PageContainer>
      <PageContentContainer>
        <div className="header">
          <h1>Dashboard</h1>
        </div>
        <CardsContainer>
          {projectInfo.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              image={project.image.CardPlaceHolderImg}
              title={project.title}
              description={project.description}
            />
          ))}
        </CardsContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default Dashboard;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
