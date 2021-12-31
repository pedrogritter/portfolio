import { down } from "styled-breakpoints";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  padding: 6rem 16rem;

  ${down("lg")} {
    flex-direction: column;
    align-items: center;
    padding: 2rem 3rem;
  }
`;  

const InformationContainer = styled.div`
`;

const Title = styled.div`
  font-size: 48px;
  text-decoration: underline solid rgb(35, 229, 219) 2px;

  ${down("lg")} {
    font-size: 28px;
    text-align: center;
  }
`;

const Contact = () => {
  const Information = (
    <InformationContainer>
      <h3>Feel free to contact me for any work or suggestions below:</h3>
      <p>Email</p>
      <p>LinkedIn</p>
    </InformationContainer>
  );

  return (
    <ContactContainer id="contact">
      <Title>Contact</Title>
      {Information}
    </ContactContainer>
  );
};

export default Contact;
