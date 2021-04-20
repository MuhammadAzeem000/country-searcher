import styled from "styled-components";
import { Container } from "../../GlobalStyle";

const CountryContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 20px;
  @media only screen and (max-width: 1225px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 723px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { CountryContainer };
