import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getproducts() {
  let data = yield fetch("http://localhost:3000/products");
  data = yield data.json();
  console.log("saga data called ", data);

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data){
    let result=yield fetch(`http://localhost:3000/products?q=${data.query}`)
    result=yield result.json();
    console.log('action search is called',result);
    yield put({type:SET_PRODUCT_LIST,data:result})
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getproducts);
  yield takeEvery(SEARCH_PRODUCT,searchProducts)
}

export default productSaga;


