import styled from "styled-components";
import { Check } from "react-feather";
import { Paragraph } from "../components/Typography";

const CheckList = ({ children }) => (
  <ListContainer>
    <Check style={{ color: "green" }} />
    <ParagraphContainer>
      <Paragraph>{children}</Paragraph>
    </ParagraphContainer>
  </ListContainer>
);

export default CheckList;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParagraphContainer = styled.div`
  width: 90%;
`;
