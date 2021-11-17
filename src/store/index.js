import { createStore, applyMiddleware } from "redux";
import combineReducers from './modules/rootReducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;