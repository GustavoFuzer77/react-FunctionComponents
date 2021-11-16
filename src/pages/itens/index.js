import React, { useEffect, useState } from "react";
import { Container } from "../../styles";
import { ItemGroup, Button } from './styled';
import axios from '../../services/axios';
import Modal from "../../components/EditPut";

export default function Itens(){

  const [item, setItem] = useState([]);

  const [modal, setModal] = useState()


  const getItem = async () =>{
    try{
      const {data} = await axios.get(`/itens`)
      console.log(data)
      setItem(data)}
    catch(e){
      console.log('deu erro' + e)
    }
  }

  const putItem = async (nome, price) => {
    try{
      const { data } = await axios.post('/item',{
        nome,
        price
      })
      console.log(data)
    }catch(e){
      console.log(e + 'error')
    }
  }

  useEffect( () => {
    getItem()
  },[])

  // useEffect( () => {
  //   putItem()
  // },[])

  return (
    <Container>
    <>
      <ul>
        {item && item.length > 0 && item.map((data) => (
          <ItemGroup key={data.id}>Nome:{data.name}  | ID: {data.id}   |  Preço: {data.price}</ItemGroup>
        ))}
      </ul>
      <Button onClick={() => {
        return <Itens/>
      }}>Criar</Button>
    </>
  </Container>
  )
}