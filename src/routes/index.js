import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'; //v6 <-

import Login from "../pages/login";
import Itens from "../pages/itens";
import PageError404 from '../pages/page404/index';

export default function Rotas() {
  return (
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/item'element={<Itens/>} />
      <Route path='*' element={<PageError404 />} />
    </Routes>
  )
}

