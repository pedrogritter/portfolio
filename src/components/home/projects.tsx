import { down } from "styled-breakpoints";
import styled from "styled-components";
import Project from "./projects/project";

const ProjectsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-size: 48px;
  text-decoration: underline solid rgb(35, 229, 219) 2px;

  ${down("lg")} {
    font-size: 28px;
    text-align: center;
  }
`;

interface ProjectsProps {
  projects: {
    name: string;
    value: number;
  }[];
}

const Projects = (props: ProjectsProps) => {

  const ProjectList = props.projects.map((project) => {
    return <Project name={project.name} value={project.value} />;
  });

  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      {ProjectList}
    </ProjectsContainer>
  );
};

export default Projects;
