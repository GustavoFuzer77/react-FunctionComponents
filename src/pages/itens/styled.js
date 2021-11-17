import styled from "styled-components";

export const ItemGroup = styled.li`
  color: #fff;
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: 600;

  @media (max-width: 600px){
    width: 100%;
    font-size: 1.5rem;
  }
`;

export const Button =styled.button`
  padding: 5px;
  color: #2b2b2b;
  background: #a1a1a1;
  border: none;
  cursor: pointer;
`;