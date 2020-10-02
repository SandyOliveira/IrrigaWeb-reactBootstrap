import React, { useState } from "react";

import { Form, Button, FormControl } from "react-bootstrap";
// import { Container } from './styles';
import "./index.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { Formik, Field, FieldArray } from "formik";

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

  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded">
        <h3>Agendamento</h3>
      </div>
      <Formik
        // validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          console.log("okkkk");
          setSubmitting(false);
        }}
        initialValues={{
          sectorSelect: [],
          roles: [],
          timeInitial: "",
          timeEnd: "",
          time: "",
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
                      <div row>
                        <div style={{ flexDirection: "column" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <label for={`exampleSelect${field}`}>Setor</label>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <FieldArray name="sectorSelect">
                              <FormControl
                                type="select"
                                name={`sectorSelect[${index}]`}
                                onChange={handleChange}
                                as="select"
                                id={`exampleSelect${field}`}
                              >
                                {sectors.map((sectors) => {
                                  return (
                                    <option>
                                      {sectors.id} - {sectors.name}
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
                    label="Repetir"
                    inline
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
                      <Checkbox name="roles" value="Seg" inline />
                      <Checkbox name="roles" value="Ter" inline />
                      <Checkbox name="roles" value="Quar" inline />
                      <Checkbox name="roles" value="Quin" inline />
                      <Checkbox name="roles" value="Sex" inline />
                      <Checkbox name="roles" value="Sab" inline />
                      <Checkbox name="roles" value="Dom" inline />
                    </div>
                    <div style={{ paddingTop: 10 }}>
                      <Form.Label for="exampleTime">
                        Hora de iniciar a irrigação
                      </Form.Label>
                      <FormControl
                        value={values.timeInitial}
                        onChange={handleChange}
                        type="time"
                        name="timeInitial"
                        id="exampleTime"
                        placeholder="time placeholder"
                      />

                      <Form.Label for="exampleTime">
                        Hora do termino da irrigação
                      </Form.Label>
                      <FormControl
                        value={values.timeEnd}
                        onChange={handleChange}
                        type="time"
                        name="timeEnd"
                        id="exampleTime"
                        placeholder="time placeholder"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 p-0">
                  <div className={!isVisible ? "" : "hidden"}>
                    <Form.Label>Data e hora</Form.Label>
                    <Field
                      name="time"
                      render={({ field, form: { isSubmitting } }) => (
                        <Datetime
                          onChange={(time) => {
                            setFieldValue(
                              "time",
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
