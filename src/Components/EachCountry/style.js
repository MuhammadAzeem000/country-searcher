import styled from "styled-components";
import { Container, Button } from "../../GlobalStyle";

const Wrapper = styled(Container)`
  margin-top: 80px;
`;

const BackButton = styled(Button)`
  margin-bottom: 80px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1220px) {
    flex-direction: column;
  }
`;

const CountryFlag = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
  flex: 0.5;
  background-size: contain;
  background-position: center;
  @media only screen and (max-width: 960px) {
    margin-bottom: 80px;
  }
`;

const CountryInfo = styled.div`
  width: 100%;
  flex: 0.45;
`;

const CountryInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media only screen and (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

const BorderCountries = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

const BorderBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  @media only screen and (max-width: 470px) {
    justify-content: space-evenly;
  }
`;

export {
  Wrapper,
  BackButton,
  DetailContainer,
  CountryFlag,
  CountryInfo,
  BorderCountries,
  CountryInfoWrapper,
  BorderBtnContainer,
};
