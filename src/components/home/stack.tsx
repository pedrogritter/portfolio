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

const InformationContainer = styled.div``;


const Title = styled.div`
  font-size: 48px;
  text-decoration: underline solid rgb(35, 229, 219) 2px;

  ${down("lg")} {
    font-size: 28px;
    text-align: center;
  }
`;

const Stack = () => {
  const Information = (
    <InformationContainer>
      <h3>This is the stack I am currently using</h3>
      <p>React</p>
      <p>TypeScript</p>
      <p>Styled Components</p>
    </InformationContainer>
  );

  return <StackContainer id="stack">
      <Title>Stack</Title>
      {Information}
      </StackContainer>;
};

export default Stack;
