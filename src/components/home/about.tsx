import { down } from "styled-breakpoints";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 6rem 16rem;

  ${down("lg")}{
      flex-direction: column;
      align-items: center;
      padding: 2rem 3rem;
  }
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 1.5rem;

  margin-bottom: 2rem;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;

  ${down("lg")}{
      padding-left: 0;
      padding-top:2rem;
  }
`;

const Title = styled.div`
    font-size: 48px;

    ${down("lg")}{
        font-size: 28px;
        text-align: center;
  }
`;

const Content = styled.div`
    padding-bottom: 2rem;
`;

const About = () => {
  const Information = (
    <InformationContainer>
      <Title>About me</Title>
      <Content>I'm a Front-End developer looking to improve in a challenging
        environment that requires team-work effort to research, learn and
        develop sustainable innovative projects/technologies that make the world
        a better and easier place to live in.</Content>

      <Title>Contact Details </Title>
      <Content>
        <p>Pedro Gritter</p>
        <p>Portugal</p>
        <p>https://pedrogritter.github.io/portfolio/</p>
      </Content>
    </InformationContainer>
  );

  return (
    <AboutContainer id="about">
      <ProfilePicture src="/portfolio/images/profilepic.jpeg" />
      {Information}
    </AboutContainer>
  );
};

export default About;
