import { takeLatest, call, put, all } from "redux-saga/effects";
//import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, "api/login/", {
      username,
      password,
    });

    const { token, user } = response.data;

    // if (!user.admin) {
    //toast.error("Usuário não é prestador");
    //    return;
    //  }

    api.defaults.headers.Authorization = `Authorization ${token}`;

    yield put(signInSuccess(token, user));

    history.push("/dashboard");
    console.log(token);
  } catch (err) {
    // toast.error("Falha na autenticação, verifique seus dados");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { username, password } = payload;

    yield call(api.post, "users", {
      username,
      password,
      provider: true,
    });

    history.push("/");
  } catch (err) {
    // toast.error("Falha no cadastro, verifique seus dados!");

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Authorization ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
