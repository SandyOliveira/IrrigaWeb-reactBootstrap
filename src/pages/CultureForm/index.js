import React from "react";

import { Formik, Field, Form } from "formik";

import { useDispatch } from "react-redux";

import "./style.css";

import { cultureInRequest } from "../../store/modules/culture/actions";

export default function CultureForm() {
  const dispatch = useDispatch();

  function onSubmit({
    nome,
    tamanho_da_area,
    epoca_da_colheita,
    tratos_culturais,
    manejo,
  }) {
    dispatch(
      cultureInRequest(
        nome,
        tamanho_da_area,
        epoca_da_colheita,
        tratos_culturais,
        manejo
      )
    );
    console.log(
      "SUBMIT",
      nome,
      tamanho_da_area,
      epoca_da_colheita,
      tratos_culturais,
      manejo
    );
  }
  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded ">
        <h3>Cadastro de Cultura</h3>
      </div>
      <Formik
        // validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          nome: "",
          tamanho_da_area: "",
          epoca_da_colheita: "",
          tratos_culturais: "",
          manejo: "",
        }}
        render={({ values, errors, touched, handleChange, handleSubmit }) => (
          <div className="col-sm-12 col-md-12 bg-light p-3  ">
            <div className="row">
              <Form className="col-md-12" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-12">
                    <div className="col-md-12 col-sm-6 col-12">
                      <label htmlFor="nameCultura">Cultura</label>
                      <Field
                        value={values.nome}
                        onChange={handleChange}
                        type="text"
                        name="nome"
                        id="nameCultura"
                        placeholder="Informe o nome da cultura"
                      />
                    </div>
                    <div className="col-md-12 col-sm-6 col-12">
                      <label htmlFor=" tamanho_da_area">Tamanho da área</label>
                      <Field
                        value={values.tamanho_da_area}
                        onChange={handleChange}
                        type="text"
                        id="tamanho_da_area"
                        name="tamanho_da_area"
                        placeholder="Informe o tamanho da área"
                      />
                    </div>
                    <div className="col-md-12 col-sm-6 col-12">
                      <label htmlFor=" epoca_da_colheita">
                        Época da colheita
                      </label>
                      <Field
                        value={values.epoca_da_colheita}
                        onChange={handleChange}
                        type="text"
                        name="epoca_da_colheita"
                        id="epoca_da_colheita"
                        placeholder="Informe a época da colheita"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-md-12 col-sm-6 col-12">
                        <label>Tratos culturais</label>
                        <Field
                          value={values.tratos_culturais}
                          onChange={handleChange}
                          name="tratos_culturais"
                          rows="5"
                          component="textarea"
                        />
                      </div>
                      <div className="col-md-12 col-sm-6 col-12">
                        <label>Manejo</label>

                        <Field
                          value={values.manejo}
                          onChange={handleChange}
                          name="manejo"
                          component="textarea"
                          rows="5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-12">
                    <button
                      type="submit"
                      color="primary"
                      style={{ float: "right", marginLeft: 15 }}
                    >
                      Salvar
                    </button>
                    <button
                      type="reset"
                      style={{ float: "right", marginLeft: 11 }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      />
    </>
  );
}
