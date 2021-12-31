import { down } from "styled-breakpoints";
import styled from "styled-components";
import resumeData from "../../resumeData";
import Project from "./projects/project";

/* TODO: 
  - Projects should be displayed in a caroussel 
  - Build caroussel shared component;
  - 
*/

const ProjectsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ProjectListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 65vw;
`;

const Title = styled.div`
  font-size: 48px;
  text-decoration: underline solid rgb(35, 229, 219) 2px;

  ${down("lg")} {
    font-size: 28px;
    text-align: center;
  }
`;

const Projects = () => {
  const ProjectList = resumeData.projects.map((project, key) => {
    return (
      <Project
        name={project.name}
        description={project.description}
        url={project.url}
        imgurl={project.imgurl}
        key={key}
      />
    );
  });

  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectListWrapper>{ProjectList}</ProjectListWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
