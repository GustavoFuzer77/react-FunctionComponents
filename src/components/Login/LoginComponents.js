import React from "react";
import {  Paragrafo, Input } from './styled'

export default function LoginComp(){
  return(
    <>
    <Paragrafo>Email:</Paragrafo>
    <Input type="email"></Input>
    <Paragrafo>Senha:</Paragrafo>
    <Input type="password"></Input>
    </>
  )
}