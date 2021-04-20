import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  width: 53%;
  border-radius: 5px;
  background: ${({ theme }) => theme.element};
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  flex: 0.15;
`;

const Input = styled.input`
  flex: 0.85;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background: none;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
  }
`;

export { SearchContainer, SearchIcon, Input };
