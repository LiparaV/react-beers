import { takeLatest } from "@redux-saga/core/effects";
import { uploadBeersRequest } from "../Reducers/beerSlice";
import uploadBeersSaga from './uploadBeersSaga'
function * rootSaga () {
yield takeLatest(uploadBeersRequest.toString(), uploadBeersSaga)
}

export default rootSaga;