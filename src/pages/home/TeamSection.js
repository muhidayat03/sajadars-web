import { Row, Col } from "../../components/Grid";
import styled from "styled-components";
import Slider from "react-styled-carousel"; 
import { BigTitle, Paragraph } from "../../components/Typography";
import Jundi from "../../assets/circle-jundi.png";
import Abdurrohim from "../../assets/circle-abdurrohim.png";
import Afni from "../../assets/circle-afni.png";
import Achmdad from "../../assets/circle-achmad.png";
import Wildan from "../../assets/circle-wildan.png";
import Circle from "../../assets/circle.jpeg";

const responsive = [
  { breakPoint: 800, cardsToShow: 5 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 600, cardsToShow: 3 },
  { breakPoint: 400, cardsToShow: 2 },
  { breakPoint: 0, cardsToShow: 2 },
];

const TeamSection = () => (
  <>
    <Section>
      <StyledRow>
        <StyledCol sm={1} md={1} xl={1}>
          <SectionContainer>
            <BigTitle data-aos="zoom-in">Our Team</BigTitle>
            <Paragraph data-aos="fade-up">
              Kami memiliki komitmen yang tinggi <br />
              untuk selalu membuat masjid menjadi lebih baik
            </Paragraph>
            <Row justify="center">
              <Col lg="3" md="3" sm="2" xs="2" padding="0">
                <MemberComponent
                  src={Jundi}
                  memberName="Jundi Imaduddin Alwan"
                  title="CEO / Founder"
                />
              </Col>
              <Col lg="3" md="3" sm="2" xs="2" padding="0">
                <MemberComponent
                  src={Abdurrohim}
                  memberName="I’tishom Abdu Rohiim"
                  title="Quality Control / Co-Founder"
                />
              </Col>
              <Col lg="3" md="3" sm="2" xs="2" padding="0">
                <MemberComponent
                  src={Afni}
                  memberName="Afni Krisnawangseh"
                  title="Secretary / Co-Founder"
                />
              </Col>
              <Col lg="3" md="3" sm="2" xs="2" padding="0">
                <MemberComponent
                  src={Achmdad}
                  memberName="Achmad Huda Fauzan"
                  title="Project Manager / Co-Founder"
                />
              </Col>
              <Col lg="3" md="3" sm="2" xs="2" padding="0">
                <MemberComponent
                  src={Wildan}
                  memberName="Muhammad Wildan Labieb"
                  title="Public Relation / Co-Founder"
                />
              </Col>
            </Row>
          </SectionContainer>
        </StyledCol>
      </StyledRow>
    </Section>
    <Section style={{ background: "white" }}>
      <StyledRow>
        <StyledCol sm={1} md={1} xl={1} direction="column">
          <BigTitle data-aos="zoom-in">Our Collaborator</BigTitle>
          <SectionContainer>
            <Slider responsive={responsive} showArrows={true} autoSlide={3000}>
              <MemberComponent
                src={Circle}
                memberName="Imanullah  Nur Amala"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Qomarudin"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Muhammad Ibrahim"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Roikhatul Habibah"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Galaz Anugrah"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Syamsul Azhari R"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Zuhria Sulkha Amalia"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Erlangga Dwi Pamungkas"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Riska Maharini"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Umara Hasmarani Rizqiyah"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Ardhita Rendra Pristyawan"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Muhammad Hidayat"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Ridwan Fajar"
                // title="CEO"
                small
              />
              <MemberComponent
                src={Circle}
                memberName="Aminah R. Makhtum"
                // title="CEO"
                small
              />
            </Slider>
          </SectionContainer>
        </StyledCol>
      </StyledRow>
    </Section>
  </>
);

export default TeamSection;

const MemberComponent = ({ src, memberName, title, small }) => (
  <MemberImageContainer small={small}>
    <MemberImage src={src} />
    <MemberName>{memberName}</MemberName>
    <MemberTitle>{title}</MemberTitle>
  </MemberImageContainer>
);

const Section = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #f8f8f8;
  @media only screen and (max-width: 600px) {
    padding: 40px 0px;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledRow = styled(Row)`
  max-width: 1000px;
  margin: auto;
`;

const StyledCol = styled(Col)`
  @media only screen and (min-width: 600px) {
    padding: 40px 20px;
  }
`;

const MemberImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ small }) =>
    small &&
    `
    transform: scale(.8);
    `}
`;

const MemberImage = styled.img`
  width: 100px;
  height: 100px;
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
  color: #37806b;
  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
`;
