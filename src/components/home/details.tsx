import { down } from "styled-breakpoints";
import styled from "styled-components";
import Detail from "./detail";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 16rem;
  background-color: white;
  color: black;

  ${down("lg")} {
    flex-direction: column;
    align-items: center;
    padding: 2rem 3rem;
  }
`;

const Separator = styled.div`
  border-bottom: 2px solid rgb(35, 229, 219);
  ${down("lg")} {
    width: 60vw;
  }
`;

const Details = () => {
  const educationData = [
    {
      title: "Information Technology",
      description: "Bsc in Computer Science, Web Applications",
      specialization: "Minor in Geographical Information",
      year: 2021,
    },
    {
      title: "Audiovisuals & Multimedia",
      description: "Create and edit multimedia content for films and TV",
      specialization: "Focused on Video Editing",
      year: 2015,
    },
  ];

  const workData = [
    {
      title: "Aptoide",
      description:
        "Frontend Engineering: Build and manage app store portal used by millions of users",
    },
  ];

  const Education = <Detail category="Education" items={educationData} />;

  const Work = <Detail category="Work" items={workData} />;

  const Skills = <Detail category="Skills" items={workData} />;

  return (
    <DetailsContainer id="resume">
      {Education}
      <Separator />
      {Work}
      <Separator />
      {Skills}
    </DetailsContainer>
  );
};

export default Details;
