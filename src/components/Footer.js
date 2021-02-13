import styled from 'styled-components';
import { MediumTitle } from './Typography';
import { Row } from './Grid';



const Header = () =>
  <Section >
    <FooterContainer>
      <MediumTitle >SAJADARS <span style={{ color: '#B3B3B3' }}>PROJECT</span></MediumTitle>
      <Underine />
      <CircleImagContainer>
        <CircleImage></CircleImage>
        <CircleImage></CircleImage>
        <CircleImage></CircleImage>
      </CircleImagContainer>
    </FooterContainer>
  </Section >

export default Header;


const Section = styled.div`
  width: 100%;  
  background-color: #F8F8F8;
`;

const FooterContainer = styled.footer`
  max-width: 1280px;
  min-height: 60px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  
  padding: 48px 20px;
`;

const Underine = styled.div`
  height: 2px;
  background-color: #37806B;
  width: 100px;
  margin-top: 12px;
`;

const CircleImage = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%; 
  background-color: white; 
  margin: 8px;
  @media only screen and (max-width: 400px) {
    width: 36px;
    height: 36px;
  } 
`
const CircleImagContainer = styled.div`
  display: flex;
  margin-top: 20px;
` 