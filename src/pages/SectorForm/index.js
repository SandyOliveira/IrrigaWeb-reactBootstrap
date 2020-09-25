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
      <div className="col-sm-12 col-md-12 bg-light p-3 ">
        <div className="row">
          <Form className="col-md-12" style={{ backgroundColor: "#f00" }}>
            <div className="row">
              <div
                className="col-md-6 col-sm-12 col-12"
                style={{ backgroundColor: "#0f0" }}
              >
                <Form.Group>
                  <Form.Label>Nome do setor</Form.Label>
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
              </div>

              <div
                className="col-md-6 col-sm-12 col-12"
                style={{ backgroundColor: "#ff0" }}
              >
                <div className="row">
                  <div
                    className="col-md-12 col-sm-6 col-12"
                    style={{ backgroundColor: "#0ff" }}
                  >
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
                    {selectCulturesField.map((field) => {
                      return (
                        <Form.Group>
                          <Form.Label for={`exampleSelect${field}`}>
                            Cultura
                          </Form.Label>
                          <div
                            style={{
                              display: "flex",

                              flexDirection: "row",
                            }}
                          >
                            <FormControl
                              type="select"
                              name="select"
                              as="select"
                              id={`exampleSelect${field}`}
                              style={{}}
                            >
                              {cultures.map((cultures) => {
                                return (
                                  <option>
                                    {cultures.id} - {cultures.name}
                                  </option>
                                );
                              })}
                            </FormControl>
                            <Button
                              onClick={() => handleDel(field)}
                              variant="danger"
                              style={{
                                marginLeft: "1%",
                                width: "40px",
                              }}
                            >
                              X
                            </Button>
                          </div>
                        </Form.Group>
                      );
                    })}
                  </div>

                  <div
                    className="col-md-12 col-sm-6 col-12"
                    style={{ backgroundColor: "#0ff" }}
                  >
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
                    {selectSensorField.map((field) => {
                      return (
                        <Form.Group>
                          <Form.Label for={`exampleSelect${field}`}>
                            Sensor
                          </Form.Label>
                          <div
                            style={{
                              display: "flex",

                              flexDirection: "row",
                            }}
                          >
                            <FormControl
                              type="select"
                              name="select"
                              as="select"
                              id={`exampleSelect${field}`}
                              style={{}}
                            >
                              {sensors.map((sensors) => {
                                return (
                                  <option>
                                    {sensors.id} - {sensors.name}
                                  </option>
                                );
                              })}
                            </FormControl>
                            <Button
                              onClick={() => handleDelete(field)}
                              variant="danger"
                              style={{
                                marginLeft: "1%",
                                width: "40px",
                              }}
                            >
                              X
                            </Button>
                          </div>
                        </Form.Group>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12 col-12">
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
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
