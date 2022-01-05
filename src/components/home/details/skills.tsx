import { down } from "styled-breakpoints";
import styled from "styled-components";
import Skill from "./skill";

const SkillsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-size: 48px;
  text-decoration: underline solid #0fb 2px;

  ${down("lg")} {
    font-size: 28px;
    text-align: center;
  }
`;

interface SkillsProps {
  skills: {
    name: string;
    value: number;
  }[];
}

const Skills = (props: SkillsProps) => {
  const SkillList = props.skills.map((skill) => {
    return <Skill name={skill.name} value={skill.value} />;
  });

  return (
    <SkillsContainer>
      <Title>Skills</Title>
      {SkillList}
    </SkillsContainer>
  );
};

export default Skills;
