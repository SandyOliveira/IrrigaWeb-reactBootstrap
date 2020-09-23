import { takeLatest, all } from "redux-saga/effects";

import { openMainRequest } from "./actions";
import { Toast } from "react-bootstrap";

export function* openMain({ payload }) {
  try {
    console.log("oooooooooookk");
    console.log(payload);
  } catch (err) {
    console.log("oooooooooookk4");
  }
}

export default all([takeLatest("@main/OPEN_MAIN_REQUEST", openMain)]);
