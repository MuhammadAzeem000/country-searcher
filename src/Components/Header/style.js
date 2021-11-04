import styled from "styled-components";
import { Container } from "../../GlobalStyle";
import { Title } from "../../GlobalStyle";

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  height: 80px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
`;

const Logo = styled(Title)`
  display: block;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export { Wrapper, Logo };
