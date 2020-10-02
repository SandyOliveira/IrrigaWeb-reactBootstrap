import React, { useState } from "react";

import { Form, Button, FormControl, Col } from "react-bootstrap";
// import { Container } from './styles';
import "./index.css";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { Formik, Field } from "formik";

function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label>
          <input
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  (value) => value !== props.value
                );
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value);
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          {props.value}
        </label>
      )}
    </Field>
  );
}

export default function ScheduleForm() {
  const [isVisible, setIsVisible] = useState(false);

  const [selectSectorField, setSelectSectorsField] = useState([0]);
  const [sectors, setSectors] = useState([
    { id: 1, name: "setor" },
    { id: 2, name: "setor2" },
  ]);

  function handleDelete(field) {
    let updated = [];
    updated = selectSectorField.filter((item) => item !== field);
    setSelectSectorsField(updated);
  }

  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded">
        <h3>Agendamento</h3>
      </div>

      <Formik
        // validationSchema={schema}
        //onSubmit={onSubmit}
        initialValues={{
          roles: [],
        }}
        render={({ values, errors, touched }) => (
          <div className="col-sm-12 col-md-12 bg-light p-3  ">
            <div className="row">
              <Form>
                <div>
                  <button
                    color="info"
                    onClick={() => {
                      setSelectSectorsField([
                        ...selectSectorField,
                        selectSectorField.length,
                      ]);
                    }}
                  >
                    Adicionar setor
                  </button>
                </div>
                <div>
                  {selectSectorField.map((field) => {
                    return (
                      <div>
                        <label for={`exampleSelect${field}`}>Setores</label>
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
                            {sectors.map((sectors) => {
                              return (
                                <option>
                                  {sectors.id} - {sectors.name}
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

                <div>
                  <input
                    onChange={(e) => setIsVisible(e.target.checked)}
                    type="checkbox"
                    id="repetir"
                    label="Repetir"
                    inline
                  />

                  <div className={isVisible ? "" : "hidden"} id="divCheck">
                    <div style={{ backgroundColor: "#f00", height: 60 }}>
                      <div>
                        <Checkbox name="roles" value="Seg" />
                        <Checkbox name="roles" value="Ter" />
                        <Checkbox name="roles" value="Quar" />
                        <Checkbox name="roles" value="Quin" />
                        <Checkbox name="roles" value="Sex" />
                        <Checkbox name="roles" value="Sab" />
                        <Checkbox name="roles" value="Dom" />
                      </div>
                      <pre>{JSON.stringify(values, null, 2)}</pre>
                    </div>

                    <div>
                      <Form.Label for="exampleTime">
                        Hora de iniciar a irrigação
                      </Form.Label>
                      <FormControl
                        type="time"
                        name="time"
                        id="exampleTime"
                        placeholder="time placeholder"
                      />
                    </div>
                    <div>
                      <Form.Label for="exampleTime">
                        Hora do termino da irrigação
                      </Form.Label>
                      <FormControl
                        type="time"
                        name="time"
                        id="exampleTime"
                        placeholder="time placeholder"
                      />
                    </div>
                  </div>
                </div>

                <div className={!isVisible ? "" : "hidden"}>
                  <Form.Label>Data e hora</Form.Label>
                  <ReactDatetime />
                </div>

                <div>
                  <Button
                    variant="primary"
                    style={{ float: "right", marginLeft: 15 }}
                  >
                    Salvar
                  </Button>
                  <Button
                    variant="danger"
                    style={{ float: "right", marginLeft: 11 }}
                  >
                    Cancelar
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}
      />
    </>
  );
}
