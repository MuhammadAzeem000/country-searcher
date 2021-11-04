import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { Heading } from "../../../GlobalStyle";

const FilterBox = styled.ul`
  position: relative;
  width: 200px;
  cursor: pointer;
`;

const Label = styled(Heading)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  background: ${({ theme }) => theme.element};
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Icon = styled(BiChevronDown)`
  font-size: 25px;
`;

const Options = styled.ul`
  display: ${({ show }) => show};
  width: 100%;
  margin-top: 10px;
  position: absolute;
  border-radius: 5px;
`;

const Option = styled(Heading)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  background: ${({ theme }) => theme.element};
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;

export { FilterBox, Label, Options, Option, Icon };
