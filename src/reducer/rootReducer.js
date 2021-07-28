import { SET_USERS } from "./action";
import * as redux from "redux" 

const initialState = {
    data: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS: {
        console.log("Data fetched :: " + action.value);
        return { ...state, data: action.value };
      }
  
      default:
        return initialState;
    }
  };
  
  export const rootReducer = redux.combineReducers({
    users: userReducer,
  });