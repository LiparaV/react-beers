import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "../Reducers/beerSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../Sagas";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: beersReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
