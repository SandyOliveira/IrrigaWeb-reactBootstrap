import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { signUpRequest } from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  username: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha precisa de no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function onSubmit({ username, email, password }) {
    dispatch(signUpRequest(username, email, password));
  }

  return (
    <>
      <Formik
        // validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{ username: "", email: "", password: "" }}
        render={({ values, errors, touched }) => (
          <Form schema={schema}>
            <Field name="username" placeholder="Informe seu nome" />
            <Field name="email" placeholder="Informe seu email" />
            <Field
              name="password"
              type="password"
              placeholder="Sua senha secreta"
            />

            <button type="submit">Criar conta</button>
            <Link to="/">Já tenho login</Link>
          </Form>
        )}
      />
    </>
  );
}
