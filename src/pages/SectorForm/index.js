import React, { useState, useEffect } from "react";
import { Form, FormControl, Button, Col } from "react-bootstrap";
// import { Container } from './styles';

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
  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded">
        <h3>Cadastro de setores</h3>
      </div>
      <div className="col-sm-12 col-md-12 bg-light p-3  ">
        <div className="row">
          <Form className="col-md-5">
            <Form.Group>
              <Form.Label for="nameSector">Nome do setor</Form.Label>
              <FormControl
                type="name"
                name="name"
                id="nameSector"
                placeholder="Informe o nome do setor"
              />
            </Form.Group>
            <Form.Group controlId="Textarea2">
              <Form.Label>Informações gerais</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
          <Form className="col-md-6">
            <div style={{ padding: 30 }}>
              <Form.Group>
                <Button
                  color="info"
                  onClick={() => {
                    setSelectCulturesField([
                      ...selectCulturesField,
                      selectCulturesField.length,
                    ]);
                  }}
                >
                  Adicionar cultura
                </Button>
              </Form.Group>

              <Form.Group>
                {selectCulturesField.map((field) => {
                  return (
                    <Form.Group row>
                      <Form.Label for={`exampleSelect${field}`} sm={1.2}>
                        Cultura
                      </Form.Label>
                      <Col sm={12}>
                        <Form.Control
                          as="select"
                          type="select"
                          name="select"
                          id={`exampleSelect${field}`}
                          style={{ width: "90%", float: "left" }}
                        >
                          {cultures.map((cultures) => {
                            return (
                              <option>
                                {cultures.id} - {cultures.name}
                              </option>
                            );
                          })}
                        </Form.Control>
                        <Button
                          onClick={() => handleDel(field)}
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
            </div>
            <div style={{ padding: 30 }}>
              <Form.Group row>
                <Button
                  color="info"
                  onClick={() => {
                    setSelectSensorField([
                      ...selectSensorField,
                      selectSensorField.length,
                    ]);
                  }}
                >
                  Adicionar sensor
                </Button>
              </Form.Group>
              <Form.Group>
                {selectSensorField.map((field) => {
                  return (
                    <Form.Group row>
                      <Form.Label for={`exampleSelect${field}`} sm={1.2}>
                        Sensor
                      </Form.Label>
                      <Col sm={12}>
                        <Form.Control
                          as="select"
                          type="select"
                          name="select"
                          id={`exampleSelect${field}`}
                          style={{ width: "90%", float: "left" }}
                        >
                          {sensors.map((sensors) => {
                            return (
                              <option>
                                {sensors.id} - {sensors.name}
                              </option>
                            );
                          })}
                        </Form.Control>

                        <Button
                          onClick={() => handleDelete(field)}
                          variant="danger"
                          icon="trash-alt"
                          style={{ width: "10%", float: "left" }}
                        >
                          X
                        </Button>
                      </Col>
                    </Form.Group>
                  );
                })}
              </Form.Group>
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
