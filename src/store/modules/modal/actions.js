import * as types from '../types';

export function modalOpenerSuccess(){
  return {
    type: types.MODAL_SUCCESS
  }
}

export function modalOpenerFailure(){
  return {
    type: types.MODAL_FAILURE
  }
}

export function modalOpenerRequest(){
  return {
    type: types.MODAL_REQUEST
  }
}