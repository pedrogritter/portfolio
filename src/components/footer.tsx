import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #0f0f0f; 
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* margin-bottom: 48px; */
  color: #303030;
  font-size: 14px;
  text-align: center;
  position: relative;
  height: 15vh;
`;

const FooterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;

  a {
    padding: 1rem;
  }

  i {
    color: white;
  }
`;

const Copyright = styled.div`
  font: 15px "Titillium Web", sans-serif;
  color: white;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <a href="http://github.com/pedrogritter">
          <i className="fa fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/pedro-gritter/">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
      </FooterList>
      <Copyright>
        Source code licensed{" "}
        <a href="https://opensource.org/licenses/MIT">MIT</a>.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
