import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

export function* requestCultura({ payload }) {
  try {
    const {
      nome,
      tamanho_da_area,
      epoca_da_colheita,
      tratos_culturais,
      manejo,
    } = payload;
    yield call(api.post, "api/v1/culturas/", {
      nome,
      tamanho_da_area,
      epoca_da_colheita,
      tratos_culturais,
      manejo,
    });
    toast.success("Cadastro de Culturas realizado com sucesso!");
    console.log("Veio aq");
    //history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verifique os dados!");
    console.log("ERRO- ta no saga");
    //yield put(signFailure());
  }
}

export default all([takeLatest("@auth/CULTURE_IN_REQUEST", requestCultura)]);
