import styled from "styled-components";
import { primaryColor, darkColor } from '../../config/colors';


export const Nav = styled.nav`
  height: 50px;
  background-color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    margin-left: 10px;
    font-weight: bold;
    color: ${darkColor};
  }
`;
