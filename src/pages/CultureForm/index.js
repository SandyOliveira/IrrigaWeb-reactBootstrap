import React from "react";

import { Formik, Field, Form } from "formik";

import "./style.css";

export default function CultureForm() {
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
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
          name: "",
          nameArea: "",
          nameColheita: "",
          textarea: "",
          textarea1: "",
        }}
        render={({ values, errors, touched }) => (
          <div className="col-sm-12 col-md-12 bg-light p-3  ">
            <div className="row">
              <Form className="col-md-12">
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-12">
                    <div className="col-md-12 col-sm-6 col-12">
                      <label for="nameCultura">Cultura</label>
                      <Field
                        type="text"
                        name="name"
                        id="nameCultura"
                        placeholder="Informe o nome da cultura"
                      />
                    </div>
                    <div className="col-md-12 col-sm-6 col-12">
                      <label for="nameArea">Tamanho da área</label>
                      <Field
                        type="text"
                        name="nameArea"
                        id="nameArea"
                        placeholder="Informe o tamanho da área"
                      />
                    </div>
                    <div className="col-md-12 col-sm-6 col-12">
                      <label for="nameColheita">Época da colheita</label>
                      <Field
                        type="text"
                        name="nameColheita"
                        id="nameColheita"
                        placeholder="Informe a época da colheita"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-md-12 col-sm-6 col-12">
                        <label>Tratos culturais</label>
                        <Field name="textarea" rows="5" component="textarea" />
                      </div>
                      <div className="col-md-12 col-sm-6 col-12">
                        <label>Manejo</label>

                        <Field name="textarea1" component="textarea" rows="5" />
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
                      value="Reset"
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
