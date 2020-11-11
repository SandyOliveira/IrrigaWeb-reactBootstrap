import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Form, Button, FormControl } from "react-bootstrap";
// import { Container } from './styles';
import "./index.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { Formik, Field, FieldArray } from "formik";

import { scheduleInRequest } from "../../store/modules/schedule/actions";

import api from "../../services/api";

export default function ScheduleForm() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const [selectSectorField, setSelectSectorsField] = useState([0]);
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    async function loadSetores() {
      const response = await api.get("api/v1/setores/");

      console.log(response.data.results);
      setSectors(response.data.results);
    }
    loadSetores();
  }, []);

  function handleDelete(field) {
    let updated = [];
    updated = selectSectorField.filter((item) => item !== field);
    setSelectSectorsField(updated);
  }

  function onSubmit({
    setor,
    dias_da_semana,
    data_inicio,
    data_fim,
    hora_inicio,
    hora_fim,
  }) {
    dispatch(
      scheduleInRequest(
        setor,
        dias_da_semana,
        data_inicio,
        data_fim,
        hora_inicio,
        hora_fim
      )
    );
    console.log(
      "aqqqq",
      setor,
      dias_da_semana,
      data_inicio,
      data_fim,
      hora_inicio,
      hora_fim
    );
  }

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
            {props.dia}
          </label>
        )}
      </Field>
    );
  }

  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded">
        <h3>Agendamento</h3>
      </div>
      <Formik
        // validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          setor: [],
          repetir: "",
          dias_da_semana: [],
          hora_inicio: "",
          hora_fim: "",
          data_inicio: "",
          data_fim: "",
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <div className="col-sm-12 col-md-12 bg-light p-3  ">
            <div className="row">
              <Form className="col-sm-12 col-md-12" onSubmit={handleSubmit}>
                <div className="col-sm-12 col-md-6 p-0">
                  <Button
                    color="info"
                    onClick={() => {
                      setSelectSectorsField([
                        ...selectSectorField,
                        selectSectorField.length,
                      ]);
                    }}
                  >
                    Adicionar setor
                  </Button>
                  {selectSectorField.map((field, index) => {
                    return (
                      <div row="true">
                        <div style={{ flexDirection: "column" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <label htmlFor={`exampleSelect${field}`}>
                              Setor
                            </label>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <FieldArray name="setor">
                              <FormControl
                                type="select"
                                name={`setor[${index}]`}
                                onChange={handleChange}
                                as="select"
                                id={`exampleSelect${field}`}
                              >
                                {sectors.map((sectors) => {
                                  return (
                                    <option value={sectors.id}>
                                      {sectors.id} - {sectors.nome}
                                    </option>
                                  );
                                })}
                              </FormControl>
                            </FieldArray>
                            <Button
                              onClick={() => handleDelete(field)}
                              variant="danger"
                              style={{
                                marginLeft: "1%",
                                width: "40px",
                                border: "none",
                                borderRadius: "8px",
                                margin: 5,
                              }}
                            >
                              X
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Form.Group>
                  <Form.Check
                    onChange={(e) => setIsVisible(e.target.checked)}
                    type="checkbox"
                    id="repetir"
                    name="repetir"
                    label="Repetir"
                    inline="true"
                  />
                </Form.Group>

                <div className="col-sm-12 col-md-6 col-12 p-0">
                  <div className={isVisible ? "" : "hidden"} id="divCheck">
                    <div
                      style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "space-between",
                        height: 20,
                      }}
                    >
                      <Checkbox
                        name="dias_da_semana"
                        dia="Dom"
                        value="1"
                        inline="true"
                      />
                      <Checkbox
                        name="dias_da_semana"
                        dia="Seg"
                        value="2"
                        inline="true"
                      />
                      <Checkbox
                        name="dias_da_semana"
                        dia="Ter"
                        value="3"
                        inline="true"
                      />
                      <Checkbox
                        name="dias_da_semana"
                        dia="Quar"
                        value="4"
                        inline="true"
                      />
                      <Checkbox
                        name="dias_da_semana"
                        dia="Quin"
                        value="5"
                        inline="true"
                      />
                      <Checkbox
                        name="dias_da_semana"
                        dia="Sex"
                        value="6"
                        inline="true"
                      />
                      <Checkbox
                        name="dias_da_semana"
                        dia="Sab"
                        value="7"
                        inline="true"
                      />
                    </div>
                    <div style={{ paddingTop: 10 }}>
                      <Form.Label htmlFor="exampleTime1">
                        Hora de iniciar a irrigação
                      </Form.Label>
                      <FormControl
                        value={values.hora_inicio}
                        onChange={handleChange}
                        type="time"
                        name="hora_inicio"
                        id="exampleTime1"
                        placeholder="time placeholder"
                      />

                      <Form.Label htmlFor="exampleTime">
                        Hora do termino da irrigação
                      </Form.Label>
                      <FormControl
                        value={values.hora_fim}
                        onChange={handleChange}
                        type="time"
                        name="hora_fim"
                        id="exampleTime"
                        placeholder="time placeholder"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 p-0">
                  <div className={!isVisible ? "" : "hidden"}>
                    <Form.Label>Data e hora de Inicio</Form.Label>
                    <Field
                      name="data_inicio"
                      render={({ field, form: { isSubmitting } }) => (
                        <Datetime
                          onChange={(time) => {
                            setFieldValue(
                              "data_inicio",
                              time.format("YYYY-MM-DD hh:mm:ss")
                            );
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 p-0">
                  <div className={!isVisible ? "" : "hidden"}>
                    <Form.Label>Data e hora de Fim</Form.Label>
                    <Field
                      name="data_fim"
                      render={({ field, form: { isSubmitting } }) => (
                        <Datetime
                          onChange={(time) => {
                            setFieldValue(
                              "data_fim",
                              time.format("YYYY-MM-DD hh:mm:ss")
                            );
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-12">
                    <Form.Group>
                      <Button
                        type="submit"
                        variant="primary"
                        style={{ float: "right", marginLeft: 15 }}
                      >
                        Salvar
                      </Button>
                      <Button
                        type="reset"
                        variant="danger"
                        style={{ float: "right", marginLeft: 11 }}
                      >
                        Cancelar
                      </Button>
                    </Form.Group>
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
