import React from "react";
import GlobalStyle from './styles/index'
import Header from './components/Header/index';
import Routers from "./routes";
function App() {
  return (
    <>
      <Header/>
      <Routers/>
      <GlobalStyle/>
    </>
  )
}

export default App;
