import { Row, Col } from "../../components/Grid";
import styled from "styled-components";
import BannerImage from "../../assets/landasan_image.svg";
import { Title, BigTitle, Paragraph } from "../../components/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { ChevronRight, ChevronLeft, Check } from "react-feather";
import CheckList from "../../components/CheckList";

const Header = () => {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setIndex(next),
    afterChange: () => setCount(count + 1),
  };

  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef && sliderRef.current && sliderRef.current.slickGoTo(index + 1);
  };
  const prevSlide = () => {
    sliderRef && sliderRef.current && sliderRef.current.slickGoTo(index - 1);
  };
  return (
    <Section id="banner-section">
      <div onClick={() => {}}></div>
      <StyledRow direction="row" align="flex-end">
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
          <ButtonContainer style={{ marginBottom: 20 }}>
            <CircleBUtton onClick={prevSlide}>
              <ChevronLeft />
            </CircleBUtton>
            <CircleBUtton style={{ marginLeft: 10 }} onClick={nextSlide}>
              <ChevronRight />
            </CircleBUtton>
          </ButtonContainer>
          <Title color="#37806B" data-aos="fade-up">
            LANDASAN
          </Title>
          <BigTitle data-aos="fade-up">SAJADARS PROJECT</BigTitle>
          <div data-aos="fade-up" style={{ width: "100%" }}>
            <Slider ref={sliderRef} {...settings}>
              <div>
                <CheckList>Ajaran untuk mengamalkan ilmu</CheckList>
                <CheckList>
                  Hadits tentang siapa yang membangun masjid akan dibangunkan
                  rumah disurga
                </CheckList>
                <CheckList>
                  Hadits tentang 7 golongan yang dinaungi Allah pada hari kiamat
                  yang salah satunya adalah seorang yang hatinya bergantung ke
                  masjid
                </CheckList>
              </div>
              <div>
                <CheckList>
                  Membantu memakmurkan masjid dalam ranah desain arsitektur
                </CheckList>
              </div>
              <div>
                <CheckList>
                  Membantu perencanaan masjid secara gratis bagi yang
                  membutuhkan
                </CheckList>
                <CheckList>
                  Mewujudkan masjid dengan standar arsitektural
                </CheckList>
                <CheckList>
                  Membantu menjadikan masjid sebagai pusat peradaban umat,
                  melalui desain
                </CheckList>
              </div>
            </Slider>
          </div>
        </LeftContainer>
      </StyledRow>
    </Section>
  );
};

export default Header;

const Section = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 40px;
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const LeftContainer = styled(Col)`
  @media only screen and (min-width: 600px) {
    padding: 48px;
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

const CircleBUtton = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #37806b;
  color: white;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledRow = styled(Row)`
  max-width: 1280px;
  margin: auto;
`;
