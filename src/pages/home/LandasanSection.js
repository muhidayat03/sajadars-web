import { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "../../components/Grid";
import LandasanImage1 from "../../assets/landasan1.svg";
import LandasanImage2 from "../../assets/landasan2.svg";
import ArrowButton from "../../components/ArrowButton";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as CheckedIcon } from "../../assets/checked-icon.svg";

const landasan = [
  "Ajaran untuk mengamalkan ilmu",
  "Hadits tentang siapa yang membangun masjid akan dibangunkan rumah disurga",
  "Hadits tentang 7 golongan yang dinaungi Allah pada hari kiamat yang salah satunya adalah seorang yang hatinya bergantung ke masjid.",
];

const visi = "Membantu memakmurkan masjid dalam ranah desain arsitektur";
const misi = [
  "Membantu perencanaan masjid secara gratis bagi yang membutuhkan",
  "Mewujudkan masjid dengan standar arsitektural",
  "Membantu menjadikan masjid sebagai pusat peradaban umat, melalui desain.",
];

const Header = () => {
  const [type, setType] = useState("first");
  const toggle = () => {
    type === "first" && setType("second");
    type === "second" && setType("first");
  };

  return (
    <Section>
      <StyledRow>
        <Col lg={2} md={1} sm={1}>
          <Image src={type === "first" ? LandasanImage1 : LandasanImage2} />
        </Col>
        <Col direction="column" lg={2} md={1} sm={1}>
          <Col padding="1.4rem 0" margin="0 0 60px 0" align="flex-end">
            <StyledArrowButton onClick={toggle}>
              <ArrowLeft />
            </StyledArrowButton>
            <StyledArrowButton
              onClick={toggle}
              color="#fff"
              bgColor="#37806B"
              mlBtn="20px"
            >
              <ArrowRight />
            </StyledArrowButton>
          </Col>
          <Col direction="column" align="start">
            <Title>{type === "first" ? "LANDASAN" : "VISI DAN MISI"}</Title>
            <Subtitle>SAJADARS PROJECT</Subtitle>
            {type === "first" ? (
              landasan.map((item, idx) => (
                <Col justify="flex-start" align="start" padding="0px">
                  <CheckedIcon style={{ marginRight: 15 }} />
                  <Content key={idx}>{item}</Content>
                </Col>
              ))
            ) : (
              <>
                <Content mb="55px">{visi}</Content>
                {misi.map((item, idx) => (
                  <>
                    <Col justify="flex-start" align="start" padding="0px">
                      <CheckedIcon style={{ marginRight: 15 }} />
                      <Content key={idx}>{item}</Content>
                    </Col>
                  </>
                ))}
              </>
            )}
          </Col>
        </Col>
      </StyledRow>
    </Section>
  );
};

export default Header;

const Section = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  height: 756px;
  padding: 25px 0;
  font-family: "Poppins", sans-serif;
`;

const StyledRow = styled(Row)`
  max-width: 1280px;
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.label`
  font-size: 30px;
  line-height: 30px;
  color: #37806b;
  margin-bottom: 40px;
  font-weight: 600;
`;

const Subtitle = styled.label`
  font-size: 50px;
  line-height: 48px;
  margin-bottom: 50px;
  font-weight: 600;
`;

const Content = styled.span`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: ${(props) => props.mb};
`;

const StyledArrowButton = styled(ArrowButton)`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor || "#fff"};
  margin-left: ${(props) => props.mlBtn || "auto"};
`;
