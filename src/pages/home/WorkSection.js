import { Row, Col } from "../../components/Grid";
import styled from "styled-components";
import { Title, BigTitle, Paragraph } from "../../components/Typography";

const WorkSection = () => (
  <Section id="banner-section">
    <StyledRow align="center">
      <Container lg={1} md={1} sm={1} direction="column" align="start">
        <BigTitle data-aos="fade-left">
          Bagaimana Kami <br /> Bekerja
        </BigTitle>
        <div style={{ width: "100%", marginTop: 40 }}>
          <Row padding="0" justify="space-between">
            <Col
              lg={2}
              md={1}
              sm={1}
              direction="column"
              padding="0"
              data-aos="fade-right"
              align="flex-start"
            >
              <TimelineWrapper>
                <Timeline first title="Project Source">
                  Mendapat project dari sosial media,
                  <br />
                  relasi anggota, atau kerjasama
                </Timeline>
                <Timeline title="Briefing">
                  Menggali informasi dari klien
                  <br />
                  oleh PR (Public Relation)
                </Timeline>
                <Timeline last adaptive title="Pembagian Tugas">
                  pembagian tugas kepada kontributor sajadars
                  <br />
                  oleh project manager
                </Timeline>
              </TimelineWrapper>
            </Col>
            <Col
              lg={2}
              md={1}
              sm={1}
              direction="column"
              padding="0"
              data-aos="fade-left"
              align="flex-start"
            >
              <TimelineWrapper>
                <Timeline first adaptive title="Pengerjaan">
                  pengerjaan maksimal 2 bulan
                  <br />
                  dengan progress mingguan (diskusi)
                </Timeline>
                <Timeline title="Output">
                  penyerahan softfile/hardfile gambar
                  <br />
                  keseluruhan kepada klien
                </Timeline>
                <Timeline last title="Revisi">
                  jika diperlukan supervisi
                </Timeline>
              </TimelineWrapper>
            </Col>
          </Row>
        </div>
      </Container>
    </StyledRow>
  </Section>
);

export default WorkSection;

const Section = styled.div`
  width: 100%;
  background-color: white;
  padding: 40px;
  @media only screen and (max-width: 600px) {
    padding: 40px 0px;
  }
`;

const TimelineWrapper = styled.div`
  @media only screen and (min-width: 800px) {
    margin: auto;
  }
`;

const Container = styled(Col)`
  overflow-x: hidden;
  @media only screen and (min-width: 600px) {
    align-items: flex-start;
  }
`;

const StyledRow = styled(Row)`
  max-width: 1280px;
  margin: auto;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #c4c4c4;
  border-radius: 50%;
  border: 4px solid white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Line = styled.div`
  width: 2px;
  height: 100%;
  background-color: #c4c4c4;
  position: absolute;
  left: 28.5px;
  top: 0;

  ${({ first }) =>
    first &&
    `
    top: 50%;
    height: 50%;
    `}
  ${({ last }) => last && `height: 50%;`}

  @media only screen and (max-width: 800px) {
    ${({ adaptive }) =>
      adaptive &&
      `
      top: 0;
      height: 100%;
      `}
  }
`;

const Description = styled(Paragraph)`
  margin: 0; ;
`;

const Timeline = ({ first, last, adaptive, children, title }) => {
  return (
    <div
      style={{
        padding: 20,
        // display: "flex",
        // alignItems: "center",
        position: "relative",
      }}
    >
      <Line first={first} last={last} adaptive={adaptive}></Line>
      <Circle></Circle>
      <div style={{ marginLeft: 36 }}>
        <Title>{title}</Title>
        <Description>{children}</Description>
      </div>
    </div>
  );
};
