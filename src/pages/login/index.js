import React, { useState } from "react";
import { Title, Paragrafo, DivLog, Input, Button } from './styled';
import { Container } from "../../styles/index";
import axios from "../../services/axios";


export default function Login(){
  

  const [user, setUser] = useState({
    email: '',
    senha: ''
  })


  const valueEmail = (e) => {
    const valor  = e.target.value

    setUser((prev) => ({
      ...prev,
      email: valor
    }))
  }

  const senhaValue = (e) => {
    const valor = e.target.value;
    
    setUser((prev) => ({
      ...prev,
      senha: valor
    }))
  }

  async function Logar(user){
    // axios.post('/auth', {email, senha})
    //   .then((res) => setUser(res.data.token))
    //   .then()
    //   .catch((err) => console.log(err))


      try{
        console.log(user.email, 'email');
        console.log(user.senha, 'senha')
    const {data} = await axios.post('auth', {
      email: user.email,
      senha: user.senha
    });
        console.log(data.token)
         localStorage.setItem('token', data.token)
      
      }catch(e){
        console.log('erro', e)
      }
  }


  return(
    <Container>
      <Title>tela de login<small>small</small></Title>
      <Paragrafo>LOGAR NA API</Paragrafo>
      <DivLog>
        <Paragrafo>Email:</Paragrafo>
        <Input type="email" onChange={(e) => valueEmail(e)}></Input>
        <Paragrafo>Senha:</Paragrafo>
        <Input type="password" onChange={(e) => senhaValue(e)}></Input>
        <Button type="button" onClick={() => Logar(user)}>LOGAR</Button>
      </DivLog>
    </Container>
  )
}
