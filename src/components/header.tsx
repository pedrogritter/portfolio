import styled from "styled-components";
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

  ${down("lg")} {
    height: 100vh;
  }
`;

const Overlay = styled.div`
  height: 800px;
  min-height: 500px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${down("lg")} {
    height: 100vh;
    justify-content: space-evenly;
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

  ${down("lg")} {
    padding: 2rem 0rem;
  }
`;

const Title = styled.h1`
  font-size: 90px;
  font-weight: 700;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 80%);

  ${down("md")} {
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

const DownButtonContainer = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: white;
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${down("md")} {
    width: 4rem;
    height: 4rem;
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

  const DownButton = (
    <DownButtonContainer>
      <a href="#about">
        <i
          className="fa fa-angle-double-down fa-2x"
          style={{ marginTop: "7px", color: "black" }}
        ></i>
      </a>
    </DownButtonContainer>
  );

  const Information = (
    <InformationContainer>
      <Title>Frontend Engineering</Title>
      <Text>Because clean code matters...</Text>
      {SocialLinks}
    </InformationContainer>
  );

  return (
    <HeaderContainer>
      <Overlay>
        {Information}
        {DownButton}
      </Overlay>
    </HeaderContainer>
  );
};

export default Header;
