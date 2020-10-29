import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

export function* requestSector({ payload }) {
  try {
    const { name, textarea, selectCultura, selectSensor } = payload;

    yield call(api.post, "api/v1/setores/", {
      nome: name,
      informacao_geral: textarea,
      cultura: selectCultura,
      sensor: selectSensor,
    });
    toast.success("Cadastro de Setores realizado com sucesso!");
    console.log("Veio aq");
    //history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verifique os dados!");
    console.log("ERRO- ta no saga");
    //yield put(signFailure());
  }
}

export default all([takeLatest("@auth/SECTORS_IN_REQUEST", requestSector)]);
