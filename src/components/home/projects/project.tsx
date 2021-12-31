import { useState } from "react";
import { down } from "styled-breakpoints";
import styled from "styled-components";
import Modal from "../../shared/modal";

const ProjectContainer = styled.div`
  margin-top: 2rem;
  border-radius: 8px;
  background-color: darkslategrey;
  margin: 2rem 3rem;
  padding: 1rem;

  cursor: pointer;
`;

const Name = styled.div`
  font-size: 30px;
  padding: 1rem 0rem;

  ${down("lg")} {
    font-size: 20px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  padding: 1rem 0rem;

  ${down("lg")} {
    font-size: 20px;
  }
`;

interface ProjectProps {
  name: string;
  description: string;
  url?: string;
  imgurl?: string;
}

const Project = (props: ProjectProps) => {
  const { name, description } = props;

  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <ProjectContainer onClick={() => setisOpen(true)}>
        <Name>{name}</Name>
      </ProjectContainer>
      {isOpen && (
        <Modal open={isOpen} closeModal={() => setisOpen(false)}>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Modal>
      )}
    </>
  );
};

export default Project;
