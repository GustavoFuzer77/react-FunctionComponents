import React from "react";
import GlobalStyle from './styles/index'
import Header from './components/Header/index';
import Rotas from "./routes";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Rotas/> 
      <GlobalStyle/>
    </Router>
  )
}

export default App;
