import * as types from '../types';

const initialState = {
  botaoClicado: false,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_SUCCESS:
      console.log('sucesso')
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    case types.MODAL_REQUEST:
      console.log('fazendo a requisição')
      return state;

    case types.MODAL_FAILURE:
      console.log('FALHOU!')
      return state;

    default:
      return state;
  }
}

export default modalReducer;