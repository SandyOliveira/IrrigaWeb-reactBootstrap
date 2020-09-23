import React, { useState } from "react";

import { Form, Button, FormControl, Col } from "react-bootstrap";
// import { Container } from './styles';
import "./index.css";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

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
      <div className="col-sm-12 col-md-12 bg-light p-3  ">
        <div className="row">
          <Form className="col-md-6">
            <Form.Group>
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
            </Form.Group>
            <Form.Group style={{ padding: 15 }}>
              {selectSectorField.map((field) => {
                return (
                  <Form.Group row>
                    <Form.Label for={`exampleSelect${field}`} sm={1.2}>
                      Setor
                    </Form.Label>
                    <Col sm={12}>
                      <FormControl
                        as="select"
                        name="select"
                        id={`exampleSelect${field}`}
                        style={{ width: "90%", float: "left" }}
                      >
                        {sectors.map((sectors) => {
                          return (
                            <option>
                              {sectors.id} - {sectors.name}
                            </option>
                          );
                        })}
                      </FormControl>
                      <Button
                        onClick={() => handleDelete(field)}
                        variant="danger"
                        style={{ width: "10%", float: "left" }}
                      >
                        X
                      </Button>
                    </Col>
                  </Form.Group>
                );
              })}
            </Form.Group>

            <Form.Group>
              <Form.Check
                onChange={(e) => setIsVisible(e.target.checked)}
                type="checkbox"
                id="repetir"
                label="Repetir"
                inline
              />

              <div className={isVisible ? "" : "hidden"} id="divCheck">
                <Form.Check
                  type="checkbox"
                  id="exampleCustomInline"
                  label="S"
                  inline
                />
                <Form.Check
                  type="checkbox"
                  id="exampleCustomInline2"
                  label="T"
                  inline
                />
                <Form.Check
                  type="checkbox"
                  id="exampleCustomInline3"
                  label="Q"
                  inline
                />
                <Form.Check
                  type="checkbox"
                  id="exampleCustomInline4"
                  label="Q"
                  inline
                />
                <Form.Check
                  type="checkbox"
                  id="exampleCustomInline5"
                  label="S"
                  inline
                />
                <Form.Check
                  type="checkbox"
                  id="exampleCustomInline6"
                  label="S"
                  inline
                />
                <Form.Check
                  type="checkbox"
                  id="exampleCustomInline7"
                  label="D"
                  inline
                />
                <Form.Group>
                  <Form.Label for="exampleTime">
                    Hora de iniciar a irrigação
                  </Form.Label>
                  <FormControl
                    type="time"
                    name="time"
                    id="exampleTime"
                    placeholder="time placeholder"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label for="exampleTime">
                    Hora do termino da irrigação
                  </Form.Label>
                  <FormControl
                    type="time"
                    name="time"
                    id="exampleTime"
                    placeholder="time placeholder"
                  />
                </Form.Group>
              </div>
            </Form.Group>

            <div className={!isVisible ? "" : "hidden"}>
              <Form.Label>Data e hora</Form.Label>
              <ReactDatetime />
            </div>
          </Form>
          <Form className="col-md-12" style={{ padding: 15 }}>
            <Form.Group>
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
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}
