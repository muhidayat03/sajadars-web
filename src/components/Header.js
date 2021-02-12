import styled from 'styled-components';
import LogoImage from '../assets/logo.png';
import LinkComponent from './LinkComponent'



const Header = () =>
  <Section >
    <Navbar class="navigation">
      <LinkComponent to="banner-section">
        <Logo src={LogoImage} alt='logo' />
      </LinkComponent>

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

const Logo = styled.img`
  padding: 0 20px; 
    height: 36px; 
  @media only screen and (max-width: 600px) {
      height: 36px; 
  } 
`;

const Navbar = styled.nav`
  max-width: 1280px;
  min-height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  .navigation button {display: none }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center; 
    padding: 12px 0;
  } 
`;

const Menu = styled.div`
  display: flex; 
  align-items: center;
  justify-content: flex-end; 
  margin: 0; 
`

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
    @media only screen and (max-width: 600px) {
      padding: 4px 8px; 
      font-size: 12px;   

  } 
`;
