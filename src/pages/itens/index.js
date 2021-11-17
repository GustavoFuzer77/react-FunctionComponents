import React, { useEffect, useState } from "react";
import { Container } from "../../styles";
import { ItemGroup, Button } from './styled';
import axios from '../../services/axios';
import Modal from "../../components/EditPut";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as modalAction from '../../store/modules/modal/actions';

export default function Itens(){

  const dispatch = useDispatch();

  const [item, setItem] = useState([]);

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

  function handleClick(e){
    dispatch(modalAction.modalOpenerRequest());
  }

  const ModalOpening = useSelector(state => state.modalReducer.botaoClicado)

  return (
    <Container>
    <>
      <ul>
        {item && item.length > 0 && item.map((data) => (
          <ItemGroup key={data.id}>Nome:{data.name}  | ID: {data.id}   |  Preço: {data.price}</ItemGroup>
        ))}
      </ul>
      <Button onClick={() => handleClick()}>Criar</Button>
      {ModalOpening ? 'CLICADO' : 'NÃO CLICADO'}
    </>
  </Container>
  )
}