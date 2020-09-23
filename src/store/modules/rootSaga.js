import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import main from "./main/sagas";

export default function* rootSaga() {
  return yield all([auth, main]);
}
