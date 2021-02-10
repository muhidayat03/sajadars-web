import styled from 'styled-components';

function getWidthString(span) {
  if (!span) return;

  const width = (1 / span) * 100;
  return `width: ${width}%;`;
}

export const Row = styled.div`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: wrap;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || null};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  width: ${({ width }) => width || '100%'};
`;

export const Col = styled.div`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || '1.2rem'};

  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

  @media only screen and (min-width: 400px) {
    ${({ sm }) => sm && getWidthString(sm)}
  }

  @media only screen and (min-width: 600px) {
    ${({ md }) => md && getWidthString(md)}
  }

  @media only screen and (min-width: 800px) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;
