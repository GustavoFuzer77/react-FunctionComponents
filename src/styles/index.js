import styled, { createGlobalStyle } from 'styled-components';
import { darkColor } from '../config/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    font-family: sans-serif;
    background-color: #404040;
  }

  #root, html {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul{
    list-style: none;
  }

`;

export const Container = styled.section`
  width: 600px;
  margin: 50px auto;
  padding: 25px;
  border-radius: 5px;
  background-color: ${darkColor};

  @media (max-width: 600px){
    width: 300px;
  }
`;