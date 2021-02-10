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
