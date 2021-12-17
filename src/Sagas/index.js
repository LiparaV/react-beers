import { takeLatest } from "@redux-saga/core/effects";
import { uploadBeersRequest, uploadPizzaRequest, uploadSteakRequest } from "../Reducers/beerSlice";
import uploadBeersSaga from './uploadBeersSaga'
import uploadPizzaSaga from "./uploadPizzaSaga";
import uploadSteakSaga from "./uploadSteakSaga"
function * rootSaga () {
yield takeLatest(uploadBeersRequest.toString(), uploadBeersSaga)
yield takeLatest(uploadPizzaRequest.toString(), uploadPizzaSaga)
yield takeLatest(uploadSteakRequest.toString(), uploadSteakSaga)
}

export default rootSaga;