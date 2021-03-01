import { Row, Col } from "../../components/Grid";

import styled from "styled-components";

const Header = () => (
  <Section>
    <Row>
      <Col>
        <h1>Project Section</h1>
      </Col>
    </Row>
  </Section>
);

export default Header;

const Section = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ccc;
  height: 600px;
`;
