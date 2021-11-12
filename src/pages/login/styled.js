import styled from 'styled-components';
import { primaryColor } from '../../config/colors';


export const Title = styled.h1`
  color: #fff;
  background-color: #2b2b2b;
  small {
    font-size: 15px;
    color: #fff;
  };

`;

//css loginComponents
export const Paragrafo = styled.p`
  color: #fff;

`;

export const DivLog = styled.div`
padding: 12px;

`;


export const Input = styled.input`
border:none;
width: 100%;
padding: 3px;
margin-bottom: 5px;
`;

export const Button = styled.button`
  border: none;
  padding: 2.5px;
  cursor: pointer;
  background-color: #949494;
  :hover{
    background-color: ${primaryColor};
  }

`;


