import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap-tabs";
// import { Container } from './styles';

export default function SensorForm() {
  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded ">
        <h3>Cadastro de sensor</h3>
      </div>
      <Tabs onSelect={(index, label) => console.log(label + " selected")}>
        <Tab label="RELÉ">
          <div className="col-md-6">
            <Form>
              <Form.Group>
                <Form.Label for="nameRele">Nome do Relé</Form.Label>
                <FormControl
                  placeholder="Informe o nome do relé"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Porta</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
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
            </Form>
          </div>
        </Tab>

        <Tab label="SENSOR">
          <div className="col-md-6">
            <Form>
              <Form.Group>
                <Form.Label for="nameRele">Nome do Sensor</Form.Label>
                <FormControl
                  placeholder="Informe o nome do sensor"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Porta</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
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
            </Form>
          </div>
        </Tab>
        <Tab label="ATUADOR">
          <div className="col-md-6">
            <Form>
              <Form.Group>
                <Form.Label for="nameRele">Nome do Atuador</Form.Label>
                <FormControl
                  placeholder="Informe o nome do atuador"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Porta</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
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
            </Form>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
