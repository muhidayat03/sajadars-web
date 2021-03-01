import styled from "styled-components";

export const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${({ color }) => color || "#646464"};
  margin: 0;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const BigTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  color: #212121;
  margin: 0;
  @media only screen and (max-width: 400px) {
    font-size: 28px;
  }
`;

export const MediumTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  color: #212121;
  margin: 0;
  @media only screen and (max-width: 400px) {
    font-size: 22px;
  }
`;

export const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #646464;
  margin: 20;
  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
`;
