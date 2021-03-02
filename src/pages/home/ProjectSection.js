import { Row, Col } from "../../components/Grid";
import styled from "styled-components";
import BannerImage from "../../assets/work_image.svg";

import Button from "../../components/Button";
import { Title, BigTitle, MediumTitle } from "../../components/Typography";
import LinkComponent from "../../components/LinkComponent";

const Header = () => (
  <Section id="banner-section">
    <StyledRow direction="row-reverse" align="center">
      <RightContainer lg={2} md={1} sm={1}>
        <div style={{ paddingTop: 40 }}>
          <ImageContainer data-aos="fade-left">
            <ImageWrapper>
              <Image src={BannerImage} />
            </ImageWrapper>
            <ImageContainerLine />
          </ImageContainer>
        </div>
      </RightContainer>
      <LeftContainer lg={2} md={1} sm={1} direction="column" align="start">
        <BannerContainer>
          <Number data-aos="fade-right">20</Number>
          <StyledBigTitle data-aos="fade-right">
            Project Berhasil Kami Selesaikan
          </StyledBigTitle>
        </BannerContainer>
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

const Number = styled.h2`
  font-size: 100px;
  margin: 0;
`;

const LeftContainer = styled(Col)`
  overflow-x: hidden;
  @media only screen and (min-width: 600px) {
    align-items: flex-start;
  }
`;

const RightContainer = styled(Col)`
  overflow-x: hidden;
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const BannerContainer = styled.div`
  width: 60%;
  margin: auto;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const StyledRow = styled(Row)`
  max-width: 1280px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-top-left-radius: 20%;
  border-bottom-right-radius: 20%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 60%;
  margin: auto;
  position: relative;
`;
const ImageContainerLine = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  border: 2px solid #eee;
  border-top-left-radius: 20%;
  border-bottom-right-radius: 20%;
  top: 2%;
  left: 2%;
  z-index: 2;
`;

const StyledBigTitle = styled(BigTitle)`
  font-weight: normal;
`;
