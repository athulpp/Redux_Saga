// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();

// const store=createStore(rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware:()=> [sagaMiddleWare],
});
sagaMiddleWare.run(productSaga);

export default store;
