import React from "react";
import LoginComp from'../../components/Login/LoginComponents';
import { Title, Paragrafo, Button, DivLog } from './styled';
import { Container } from "../../styles/index";


export default function Login(){
  
  return(
    <Container>
      <Title>tela de login<small>small</small></Title>
      <Paragrafo>LOGAR NA API</Paragrafo>
      <DivLog>
        <LoginComp/>
      </DivLog>
      <Button type="button">LOGAR</Button>
    </Container>
  )
}
