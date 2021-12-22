import { put } from "@redux-saga/core/effects";
import { uploadBeersSuccess, uploadBeersError } from "../Reducers/beerSlice";
import * as API from "../API";

function* uploadPizzaSaga(actions) {
  try {
    const response = yield API.uploadPizza(actions.payload);

    yield put(uploadBeersSuccess(response.data));
  } catch (error) {
    yield put(uploadBeersError(error));
  }
}

export default uploadPizzaSaga;
