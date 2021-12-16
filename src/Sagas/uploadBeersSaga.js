import { put } from "@redux-saga/core/effects";
import { uploadBeersSuccess, uploadBeersError } from "../Reducers/beerSlice";
import * as API from "../API"

function * uploadBeersSaga (actions) {
try {
    const response = yield API.uploadBeers(actions.payload);
    console.log(response)
   yield put(
       uploadBeersSuccess(response.data)
       
   )
} catch (error) {
    yield put(
        uploadBeersError(error)
    )
}
}

export default uploadBeersSaga;