import styled from "styled-components";
import Navbar from "./shared/navbar";
import { down } from "styled-breakpoints";

const HeaderContainer = styled.div`
  position: relative;
  height: 800px;
  min-height: 500px;
  width: 100%;
  background: #161415 url("/portfolio/images/mountain.jpeg") no-repeat top
    center;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  text-align: center;
  overflow: hidden;
  font: 20px "Titillium Web", sans-serif;

  ${down("lg")}{
      height: 100vh;
  }
`;

const Overlay = styled.div`
  height: 800px;
  min-height: 500px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);

  ${down("lg")}{
      height: 100vh;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  padding-top: 10rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 90px;
  font-weight: 700;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 80%);

  ${down("md")}{
      font-size: 40px;
  }
`;

const Text = styled.h3`
  font-size: 18px;
  font-weight: 400;
  padding: 0 5rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;

  a {
    padding: 2rem;
  }

  i {
    color: white;
  }
`;

const Header = () => {
  const SocialLinks = (
    <Links>
      <a href="http://github.com/pedrogritter">
        <i className="fa fa-github fa-3x"></i>
      </a>
      <a href="https://www.linkedin.com/in/pedro-gritter/">
        <i className="fa fa-linkedin fa-3x"></i>
      </a>
    </Links>
  );

  const Information = (
    <InformationContainer>
      <Title>Frontend Engineering</Title>
      <Text>
        I'm a Front-End developer looking to improve in a challenging
        environment that requires team-work effort to research, learn and
        develop sustainable innovative projects/technologies that make the world
        a better and easier place to live in.
      </Text>
      {SocialLinks}
    </InformationContainer>
  );

  return (
    <HeaderContainer>
      <Overlay>
        {Information}
      </Overlay>
    </HeaderContainer>
  );
};

export default Header;


