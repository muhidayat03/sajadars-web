
import { Row, Col } from '../../components/Grid';
import styled from 'styled-components';
import Slider from 'react-styled-carousel';
import MemberImage1 from "../../assets/member-1.svg";
import { BigTitle, Paragraph } from "../../components/Typography";


const responsive = [
  { breakPoint: 680, cardsToShow: 3 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 300, cardsToShow: 2 },
];

const TeamSection = () => <Section>
  <StyledRow>
    <StyledCol sm={1} md={1} xl={1}>
      <SectionContainer>
        <BigTitle data-aos="zoom-in">Our Team</BigTitle>
        <Paragraph data-aos="fade-up">
          Kami memiliki komitmen yang tinggi <br />
            untuk selalu membuat masjid menjadi lebih baik
          </Paragraph>
        <Slider responsive={responsive} showArrows={false} autoSlide={4000}>
          <MemberComponent src={MemberImage1} memberName='Jundi Imadh' title='CEO' />
          <MemberComponent src={MemberImage1} memberName='Jundi Imadh' title='CEO' />
          <MemberComponent src={MemberImage1} memberName='Jundi Imadh' title='CEO' />
          <MemberComponent src={MemberImage1} memberName='Jundi Imadh' title='CEO' />
          <MemberComponent src={MemberImage1} memberName='Jundi Imadh' title='CEO' />
        </Slider>
      </SectionContainer>
    </StyledCol>
  </StyledRow>
</Section >

export default TeamSection;


const MemberComponent = ({ src, memberName, title }) => <MemberImageContainer>
  <MemberImage src={src} />
  <MemberName>{memberName}</MemberName>
  <MemberTitle>{title}</MemberTitle>
</MemberImageContainer>


const Section = styled.div`
  width: 100%;  
  padding:40px;
  background-color: #F8F8F8;
  @media only screen and (max-width: 600px) {
    padding:0px;
  } 
`;

const SectionContainer = styled.div`
  width: 100%; 
  text-align : center;
`

const StyledRow = styled(Row)`
  max-width: 1000px;
  margin: auto;
`;

const StyledCol = styled(Col)`
  @media only screen and (min-width: 600px) {
    padding : 40px 20px;
  } 
`;

const MemberImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const MemberImage = styled.img`
  width: 120px;
  height: 120px;
  margin: 20px auto;
  display: block;
  border-radius: 50%;
  background-color: #ccc;
`;

const MemberName = styled.h3`
  font-family: "Poppins", sans-serif; 
  font-weight: 600;  
  color: #212121;
  margin: 0; 
  @media only screen and (max-width: 400px) {
    font-size: 16px;
  } 
`;

const MemberTitle = styled.p`
  font-family: "Poppins", sans-serif;  
  color: #212121;
  margin: 8px; 
  font-size: 16px;
  color: #37806B;
  @media only screen and (max-width: 400px) { 
    font-size: 14px;
  } 
`;

