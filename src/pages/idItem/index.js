import React, { useState, useEffect } from "react";
import { Container } from "../../styles";
import axios from '../../services/axios';
import { useParams } from "react-router";

export default function ItemIdParams() {

  const [item, setItem] = useState([])

  const { id } = useParams()

  const getItemId = async () => {
    try {
      const { data } = await axios.get('item/:id')
      console.log(data)
      setItem(data)
    } catch (e) {
      console.log(e, 'deu erro')
    }
  }

  useEffect( () => {
    getItemId()
  },[])



  return (
    <Container>
      <>
        <h1>teste - {id}</h1>
        {item && item.length > 0 && item.map((data) => (
          <h1 key={data.id}>{data.itemId}</h1>
        ))}
      </>
    </Container>
  )
}