import { Row, Col } from "../../components/Grid";
import styled from "styled-components";
import BannerImage from "../../assets/banner_image.svg";
import Button from "../../components/Button";
import { Title, BigTitle, Paragraph } from "../../components/Typography";
import LinkComponent from "../../components/LinkComponent";

const Header = () => (
  <Section id="banner-section">
    <StyledRow direction="row-reverse" align="flex-end">
      <RightContainer lg={2} md={1} sm={1}>
        <div style={{ paddingTop: 40 }}>
          <Image
            data-aos="zoom-in"
            data-aos-anchor-placement="center-bottom"
            src={BannerImage}
            alt="Banner"
          />
        </div>
      </RightContainer>
      <LeftContainer lg={2} md={1} sm={1} direction="column" align="start">
        <Title data-aos="fade-up">SAJADARS PROJECT</Title>
        <BigTitle data-aos="fade-up">
          Bangun Masjid <br /> Lebih Baik
        </BigTitle>
        <Paragraph data-aos="fade-up">
          Berdiri sejak Agustus 2019, SAJADARS merupakan organisasi nirlaba yang
          bergerak dalam perencanaan desain arsitektur masjid dan fasilitasnya.
          Mari berkontribusi bersama kami untuk beramal dan berkarya membuat
          masjid lebih baik.
        </Paragraph>
        <LinkComponent to="about-section">
          <StyledButton
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="center-bottom"
          >
            LEBIH LANJUT
          </StyledButton>
        </LinkComponent>
      </LeftContainer>
    </StyledRow>
  </Section>
);

export default Header;

const Section = styled.div`
  width: 100%;
  background-color: white;
  padding: 40px;
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const LeftContainer = styled(Col)`
  @media only screen and (min-width: 600px) {
    padding: 40px 20px;
    align-items: flex-start;
  }
`;

const RightContainer = styled(Col)`
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 60px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const StyledRow = styled(Row)`
  max-width: 1280px;
  margin: auto;
`;
