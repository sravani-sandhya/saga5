import * as redux from "redux";
import reduxSaga from "redux-saga";
//import thunk from "redux-thunk";
import { rootReducer } from "./reducer/rootReducer";
import rootSaga from "./sagas/rootSaga";

export const getStore=()=>{
  const initialState={}
  const reduxSagaMiddleWare=reduxSaga();
  const store = redux.createStore(rootReducer,initialState, redux.applyMiddleware(reduxSagaMiddleWare));
  reduxSagaMiddleWare.run(rootSaga)
  return store;
}