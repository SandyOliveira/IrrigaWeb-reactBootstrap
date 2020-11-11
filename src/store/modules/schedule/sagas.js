import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

export function* requestSchedule({ payload }) {
  try {
    console.log(payload);
    const {
      setor,
      dias_da_semana,
      data_inicio,
      data_fim,
      hora_inicio,
      hora_fim,
    } = payload;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    yield call(api.post, "api/v1/schedules/", {
      setor,
      dias_da_semana,
      data_inicio,
      data_fim,
      hora_inicio,
      hora_fim,
    });
    toast.success("Agendamento realizado com sucesso!");
    console.log("Veio aq");
    //history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verifique os dados!");
    console.log(err);
    console.log("ERRO- ta no saga");
    //yield put(signFailure());
  }
}

export default all([takeLatest("@auth/SCHEDULE_IN_REQUEST", requestSchedule)]);
