import { GET_USERS, SET_USERS } from "../reducer/action";
import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

export function* watchGetUsers(){
    console.log("Inside watchGetUsers");
    yield takeEvery(GET_USERS,workerGetUser);
}

export function* workerGetUser(){
    console.log("Inside workerGetUsers")
    const uri="https://jsonplaceholder.typicode.com/users";
    const result=yield call(axios.get,uri);
    console.log("data's",result.data)
    yield put({type: SET_USERS,value: result.data})
}