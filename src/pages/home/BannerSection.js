import { Row, Col } from "../../components/Grid";
import styled from "styled-components";
import BannerImage from "../../assets/banner_image.svg";

const Header = () => (
  <Section>
    <Col padding="0">
      <SubSection padding="100px">
        <Row>
          <Title>SAJADARS PROJECT</Title>
          <BigTitle>Bangun Masjid Lebih Baik</BigTitle>
          <Paragraph>
            Berdiri sejak Agustus 2019, SAJADARS merupakan organisasi nirlaba
            yang bergerak dalam perencanaan desain arsitektur masjid dan
            fasilitasnya. Mari berkontribusi bersama kami untuk beramal dan
            berkarya membuat masjid lebih baik.
          </Paragraph>
          <Row padding="20px 0">
            <Button>LEBIH LANJUT</Button>
          </Row>
        </Row>
      </SubSection>
      <SubSection align="flex-end">
        <Image src={BannerImage} alt="Banner" />
      </SubSection>
    </Col>
  </Section>
);

const Section = styled.div`
  width: 100%;
  height: 100vh;
`;

const SubSection = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: ${({ padding }) => padding || null};
  display: flex;
  align-items: ${({ align }) => align || "center"};
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.span`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #646464;
`;

const BigTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 78px;
  color: #212121;
`;

const Paragraph = styled.span`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #646464;
`;

const Button = styled.button`
  width: 208.12px;
  height: 60px;
  background: #37806b;
  border-radius: 20px 0px;
  border: none;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition-duration: 0.4s;
  :hover {
    background: #4fbc9d;
  }
`;

export default Header;
