import styled from "styled-components";

const Card = styled.a`
  display: block;
  width: 260px;
  height: auto;
  border-radius: 5px;
  background: ${({ theme }) => theme.element};
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
`;

const CardImage = styled.div`
  background-image: url(${({ src }) => src});
  height: 160px;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-position: center;
  background-size: cover;
`;

const CardDetail = styled.div`
  padding: 15px;
`;

export { Card, CardImage, CardDetail };
