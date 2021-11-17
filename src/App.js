import React from "react";
import GlobalStyle from './styles/index';
import Header from './components/Header/index';
import Rotas from "./routes";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Rotas />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
