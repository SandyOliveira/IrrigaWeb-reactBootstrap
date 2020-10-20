import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { signInRequest } from "../../store/modules/auth/actions";

//import logo from '~/assets/logo.svg';
// import { Container } from './styles';

const schema = Yup.object().shape({
  username: Yup.string("Insira um nome válido").required(
    "O nome é obrigatório"
  ),
  password: Yup.string().required("A senha é obrigatória"),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function onSubmit({ username, password }) {
    dispatch(signInRequest(username, password));
    console.log("SUBMIT", username, password);
  }

  return (
    <>
      <Formik
        // validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{ username: "", password: "" }}
        render={({ values, errors, touched }) => (
          <Form schema={schema}>
            <Field name="username" placeholder="Seu nome" />
            <Field
              name="password"
              type="password"
              placeholder="Sua senha secreta"
            />

            <button type="submit">
              {loading ? "Carregando..." : "Acessar"}
            </button>
            <Link to="/register">Criar conta gratuita</Link>
          </Form>
        )}
      />
    </>
  );
}
