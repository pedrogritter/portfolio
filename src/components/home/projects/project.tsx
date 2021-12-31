import { down } from "styled-breakpoints";
import styled from "styled-components";

const ProjectContainer = styled.div`
  margin-top: 2rem;
`;

const Name = styled.div`
  font-size: 30px;
  padding: 1rem 0rem;

  ${down("lg")} {
    font-size: 20px;
  }
`;

interface ProjectProps {
  name: string;
  value: number;
}

const Project = (props: ProjectProps) => {
  const { name, value } = props;

  return (
    <ProjectContainer>
      <Name>{name}</Name>
    </ProjectContainer>
  );
};

export default Project;
