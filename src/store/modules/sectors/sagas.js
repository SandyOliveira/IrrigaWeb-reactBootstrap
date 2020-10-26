import { takeLatest, call, put, all } from "redux-saga/effects";
//import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

export function* requestSector({ payload }) {
  try {
    const { name, textarea, selectCultura, selectSensor } = payload;

    yield call(api.post, "api/v1/setores/", {
      name,
      textarea,
      selectCultura,
      selectSensor,
    });
    console.log("Veio aq");
    history.push("/");
  } catch (err) {
    // toast.error("Falha no cadastro, verifique seus dados!");
    console.log("ERRO");
    //yield put(signFailure());
  }
}

export default all([takeLatest("@auth/SECTORS_IN_REQUEST", requestSector)]);
