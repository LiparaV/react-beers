import { put } from "@redux-saga/core/effects";
import { uploadBeersSuccess, uploadBeersError } from "../Reducers/beerSlice";
import * as API from "../API";

function* uploadSteakSaga(actions) {
  try {
    const response = yield API.uploadSteak(actions.payload);

    yield put(uploadBeersSuccess(response.data));
  } catch (error) {
    yield put(uploadBeersError(error));
  }
}

export default uploadSteakSaga;
