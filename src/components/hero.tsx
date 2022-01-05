import styled from "styled-components";
import { down } from "styled-breakpoints";
import resumeData from "../resumeData";


const HeroContainer = styled.div`
  position: relative;
  height: 800px;
  min-height: 500px;
  width: 100%;
  background: #161415 url("/portfolio/images/mountain.jpeg") no-repeat top
    center;
  background-size: cover !important;
  -webkit-background-size: cover !important;
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
  background: rgba(46, 46, 46, 0.7);
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
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 3rem;
  color: white;

  ${down("lg")} {
    padding: 2rem 0rem;
  }
`;

const Title = styled.div`
  font-size: 7rem;
  font-weight: 700;
  color: #8ba3a1;

  ${down("md")} {
    font-size: 5rem;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding-top: 1rem;
`;

const Job = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #0fb;
`;


const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;

  a {
    padding: 2rem;
  }

  i {
    color: white;
  }
`;

const ContactButton = styled.a`
  color: #0fb;
  background-color: transparent;
  border: 1px solid #0fb;
  border-radius: 8px;
  padding: 1.25rem 1.75rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  margin-top: 2rem;
`;

// const DownButtonContainer = styled.div`
//   display: flex;
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
//   background-color: white;
//   justify-self: flex-end;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;

//   ${down("md")} {
//     width: 4rem;
//     height: 4rem;
//   }
// `;

const Hero = () => {
  // TODO: Use react-icons instead of classnames for icons
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

  // const DownButton = (
  //   <DownButtonContainer>
  //     <a href="#about">
  //       <i
  //         className="fa fa-angle-down fa-2x"
  //         style={{ marginTop: "4px", color: "black" }}
  //       ></i>
  //     </a>
  //   </DownButtonContainer>
  // );

  const Information = (
    <InformationContainer>
      <Title>{resumeData.hero.title}</Title>
      <Job>{resumeData.hero.job}</Job>
      <Subtitle>{resumeData.hero.subtitle}</Subtitle>
      <ContactButton href="#contact">
        {resumeData.hero.contact}
      </ContactButton>
  
    </InformationContainer>
  );

  return (
    <HeroContainer>
      <Overlay>
        {Information}
        {SocialLinks}
        {/* {DownButton} */}
      </Overlay>
    </HeroContainer>
  );
};

export default Hero;
