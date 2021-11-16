import React from "react";
import GlobalStyle from './styles/index'
import Header from './components/Header/index';
import Rotas from "./routes";
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Rotas/> 
      <GlobalStyle/>
    </BrowserRouter>
  )
}

export default App;
