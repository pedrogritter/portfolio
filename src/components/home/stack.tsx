import { down } from "styled-breakpoints";
import styled from "styled-components";


const StackContainer = styled.div`
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

const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${down("lg")} {
    flex-direction: column;
    align-items: center;
    padding: 2rem 3rem;
  }
`;

const Icon = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 8px;
  margin: 1rem 2rem;
`


const Title = styled.div`
  font-size: 48px;
  text-decoration: underline solid #0fb 2px;

  ${down("lg")} {
    font-size: 28px;
    text-align: center;
  }
`;

const Stack = () => {
  const Information = (
    <InformationContainer>
      <a href="https://reactjs.org/">
        <Icon src="/portfolio/images/logo192.png" />
      </a>
      <a href="https://www.typescriptlang.org/">
        <Icon src="/portfolio/images/typescript-logo.svg" />
      </a>
      <a href="https://styled-components.com/">
        <Icon src="/portfolio/images/styledC-icon.png" />
      </a>
    </InformationContainer>
  );

  return (
    <StackContainer id="stack">
      <Title>Stack</Title>
      <h2>This is the stack I am currently using</h2>
      {Information}
    </StackContainer>
  );
};

export default Stack;
