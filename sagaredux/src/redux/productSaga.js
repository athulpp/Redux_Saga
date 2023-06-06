import {takeEvery,put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getproducts(){
   let data=yield fetch("http://localhost:3000/products");
   data=yield data.json();
console.log("saga data called ",data);

yield put({type:SET_PRODUCT_LIST,data})
}

function* productSaga(){

yield takeEvery(PRODUCT_LIST,getproducts)
}

export default productSaga;