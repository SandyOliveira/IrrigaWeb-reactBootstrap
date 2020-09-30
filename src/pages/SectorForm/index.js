import React, { useState, useEffect } from "react";

import { Formik, Field, Form } from "formik";

import "./index.css";

export default function SectorForm() {
  const [isVisible, setIsVisible] = useState(false);

  const [selectSensorField, setSelectSensorField] = useState([0]);
  const [sensors, setSensors] = useState([
    { id: 1, name: "umidade" },
    { id: 2, name: "umidade2" },
  ]);

  const [selectCulturesField, setSelectCulturesField] = useState([0]);
  const [cultures, setCultures] = useState([{ id: 1, name: "cenoura" }]);

  useEffect(() => {}, [sensors]);

  function handleDelete(field) {
    let updated = [];
    updated = selectSensorField.filter((item) => item !== field);
    setSelectSensorField(updated);
  }

  function handleDel(field) {
    let updated = [];
    updated = selectCulturesField.filter((item) => item !== field);
    setSelectCulturesField(updated);
  }

  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded">
        <h3>Cadastro de setores</h3>
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
          <div className="col-sm-12 col-md-12 bg-light p-3 ">
            <div className="row">
              <Form className="col-md-12">
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-12">
                    <div>
                      <label>Nome do setor</label>
                      <Field
                        type="text"
                        name="name"
                        id="nameSector"
                        placeholder="Informe o nome do setor"
                      />
                    </div>

                    <div>
                      <label>Informações gerais</label>
                      <Field name="textarea" rows="5" component="textarea" />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-md-12 col-sm-6 col-12">
                        <button
                          style={{
                            backgroundColor: "#00f",
                            color: "#fff",
                            padding: "12px 20px",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setSelectCulturesField([
                              ...selectCulturesField,
                              selectCulturesField.length,
                            ]);
                          }}
                        >
                          Adicionar cultura
                        </button>
                        <div>
                          {selectCulturesField.map((field) => {
                            return (
                              <div>
                                <label for={`exampleSelect${field}`}>
                                  Cultura
                                </label>
                                <div
                                  style={{
                                    display: "flex",

                                    flexDirection: "row",
                                  }}
                                >
                                  <Field
                                    type="select"
                                    name="select"
                                    as="select"
                                    id={`exampleSelect${field}`}
                                    style={{
                                      backgroundColor: "#fff",
                                    }}
                                  >
                                    {cultures.map((cultures) => {
                                      return (
                                        <option>
                                          {cultures.id} - {cultures.name}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                  <button
                                    onClick={() => handleDel(field)}
                                    style={{
                                      marginLeft: "1%",
                                      width: "40px",
                                      backgroundColor: "#ff0000",
                                      border: "none",
                                      borderRadius: "4px",
                                    }}
                                  >
                                    X
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-6 col-12">
                        <button
                          style={{
                            backgroundColor: "#00f",
                            color: "#fff",
                            padding: "12px 20px",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setSelectSensorField([
                              ...selectSensorField,
                              selectSensorField.length,
                            ]);
                          }}
                        >
                          Adicionar sensor
                        </button>
                        {selectSensorField.map((field) => {
                          return (
                            <div>
                              <label for={`exampleSelect${field}`}>
                                Sensor
                              </label>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <Field
                                  type="select"
                                  name="select1"
                                  as="select"
                                  id={`exampleSelect${field}`}
                                  style={{
                                    backgroundColor: "#fff",
                                  }}
                                >
                                  {sensors.map((sensors) => {
                                    return (
                                      <option>
                                        {sensors.id} - {sensors.name}
                                      </option>
                                    );
                                  })}
                                </Field>
                                <button
                                  onClick={() => handleDelete(field)}
                                  style={{
                                    marginLeft: "1%",
                                    width: "40px",
                                    backgroundColor: "#ff0000",
                                    border: "none",
                                    borderRadius: "4px",
                                  }}
                                >
                                  X
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 col-sm-12 col-12">
                    <div>
                      <button
                        type="submit"
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
                </div>
              </Form>
            </div>
          </div>
        )}
      />
    </>
  );
}
