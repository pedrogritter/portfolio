import { down } from "styled-breakpoints";
import styled from "styled-components";
import ProgressBar from "../../shared/progress-bar";

const SkillContainer = styled.div`
  padding-top: 1rem;
`;

const Name = styled.div`
  font-size: 30px;
  padding: 1rem 0rem;

  ${down("lg")} {
    font-size: 20px;
    /* text-align: center; */
  }
`;

interface SkillProps {
  name: string;
  value: number;
}

const Skill = (props: SkillProps) => {
  const { name, value } = props;

  return (
    <SkillContainer>
      <Name>{name}</Name>
      <ProgressBar value={value} max={100} />
    </SkillContainer>
  );
};

export default Skill;
