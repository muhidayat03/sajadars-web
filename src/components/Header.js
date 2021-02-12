
import { Row, Col } from './Grid';
import styled from 'styled-components';
import LogoImage from '../assets/logo.png';
import { Link, animateScroll as scroll } from "react-scroll";
import LinkComponent from './LinkComponent'



const Header = () =>
  <Section >
    <Navbar class="navigation">
      {/* <button aria-expanded="false" aria-controls="menu">
        <svg id="i-menu" aria-label="Menu" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
          <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
        </svg>
      </button> */}
      <ImageContainer>
        <LinkComponent to="banner-section">
          <img src={LogoImage} alt='logo' height={50} />
        </LinkComponent>
      </ImageContainer>

      <Menu>
        <StyledLink to="banner-section">
          HOME
        </StyledLink>
        <StyledLink to="about-section">
          ABOUT
        </StyledLink>
        <StyledLink to="workflow-section">
          WORKFLOW
        </StyledLink>
        <StyledLink to="project-section">
          PROJECT
        </StyledLink>
        <StyledLink to="team-section">
          TEAM
        </StyledLink>
      </Menu>
    </Navbar>
  </Section>

export default Header;


const Section = styled.div`
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 99; 
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const Navbar = styled.nav`
  max-width: 1280px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  .navigation button {display: none }
`;

const Menu = styled.div`
  display: flex; 
  align-items: center;
  justify-content: flex-end; 
  margin: 0; 
`
const Test = styled.div`
  color: red;
`;


const StyledLink = styled(LinkComponent)` 
    font-style: normal;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;   
    margin: 0 4px;
    pointer-events: all; 
    padding: 8px 14px; 
    border-radius: 2em;  
    transition:background .25s ease-out;
    :hover, :focus {
      font-weight: bold;
    }
  
`;
