import { down } from "styled-breakpoints";
import styled from "styled-components";
import Detail from "./details/detail";
import Skills from "./details/skills";
import resumeData from "../../resumeData";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 16rem;
  background-color: darkgray;
  color: black;

  /* Check all borders in details */
  /* * {
    border: 2px dashed blue;
  } */

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

  const Education = <Detail category="Education" items={resumeData.details.education} />;
  const Work = <Detail category="Work" items={resumeData.details.work} />;
  const SkillsC = <Skills skills={resumeData.details.skills} />;

  return (
    <DetailsContainer id="resume">
      {Education}
      <Separator />
      {Work}
      <Separator />
      {SkillsC}
    </DetailsContainer>
  );
};

export default Details;
