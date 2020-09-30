<div className="row" style={{ backgroundColor: "#f00" }}>
<div
  className="col-md-6 col-sm-4 col-9"
  style={{ height: 100, backgroundColor: "#00f" }}
>
  col-sm-4 col-9
</div>
<div
  className="col-md-6 col-sm-8 col-3"
  style={{ height: 100, backgroundColor: "#0ff" }}
>
  <div
    className="col-md-10 col-sm-6 col-3"
    style={{ height: 100, backgroundColor: "#f0f" }}
  >
    col-sm-4 col-9
  </div>
</div>
<div
  className="col-sm-8"
  style={{ height: 100, backgroundColor: "#0ff" }}
></div>
<div
  className="col-sm-1"
  style={{ height: 100, backgroundColor: "#0f0" }}
></div>
</div>
<div className="row" style={{ backgroundColor: "#f00" }}>
  <div
    className="col-sm-1"
    style={{ height: 100, backgroundColor: "#0f0" }}
  ></div>
</div>

///////////////**********************************************//////////////// */
import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap-tabs";
// import { Container } from './styles';

export default function SensorForm() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded ">
        <h3>Cadastro de sensor</h3>
      </div>
      <Tabs onSelect={(index, label) => console.log(label + " selected")}>
        <Tab label="RELÉ">
          <Form>
            <div className="col-md-6">
              <Form.Group onSubmit={onFormSubmit}>
                <Form.Label>Nome do Relé</Form.Label>
                <FormControl
                  placeholder="Informe o nome do relé"
                  type="nameRele"
                  name="nameRele"
                  id="nameRele"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />

                <Form.Label>Porta</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>

                <Button
                  type="submit"
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
          </Form>
        </Tab>

        <Tab label="SENSOR">
          <Form>
            <div className="col-md-6">
              <Form.Group onSubmit={onFormSubmit}>
                <Form.Label>Nome do Sensor</Form.Label>
                <FormControl
                  type="nameSensor"
                  name="nameSensor"
                  id="nameSensor"
                  placeholder="Informe o nome do sensor"
                  aria-label="Username1"
                  aria-describedby="basic-addon1"
                />

                <Form.Label>Porta</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>

                <Button
                  variant="primary"
                  type="submit"
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
          </Form>
        </Tab>
        <Tab label="ATUADOR">
          <Form>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Nome do Atuador</Form.Label>
                <FormControl
                  type="nameAtuador"
                  name="nameAtuador"
                  id="nameAtuador"
                  placeholder="Informe o nome do atuador"
                  aria-label="Username2"
                  aria-describedby="basic-addon1"
                />

                <Form.Label>Porta</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group onSubmit={onFormSubmit}>
                <Button
                  type="submit"
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
          </Form>
        </Tab>
      </Tabs>
    </>
  );
}



////****Importante */
https://stackoverflow.com/questions/63182107/react-bootstrap-get-value-from-form-on-submit
