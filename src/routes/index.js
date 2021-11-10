import React from "react";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Login from "../pages/login";
import PageError404 from '../pages/page404/index';

export default function Routers(){
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='*' element={<PageError404/>}/>
      </Routes>
    </Router>
  )
}