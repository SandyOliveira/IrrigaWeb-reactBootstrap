import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import sectors from "./sectors/sagas";
import culture from "./culture/sagas";

export default function* rootSaga() {
  return yield all([auth, sectors, culture]);
}
