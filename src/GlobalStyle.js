import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
}

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    height: 100vh;
}

a{
  text-decoration: none;
  color: ${({ theme }) => theme.text};
}

ul {
  margin:0px;
  padding: 0px;
}

li {
  list-style: none;
}
`;

const Container = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const Field = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Heading = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
  letter-spacing: 0.5px;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const Button = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.element};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.body};
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.text};
  margin-right: 10px;
  font-size: 14px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export { Field, Heading, Text, GlobalStyle, Container, Title, Button, Icon };
