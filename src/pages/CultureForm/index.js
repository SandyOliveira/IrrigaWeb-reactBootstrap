import React from "react";

// import { Container } from './styles';
import { Form, FormControl, Button } from "react-bootstrap";

export default function CultureForm() {
  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded ">
        <h3>Cadastro de Cultura</h3>
      </div>

      <div className="col-sm-12 col-md-12 bg-light p-3  ">
        <div className="row">
          <Form className="col-md-6">
            <Form.Group>
              <Form.Label for="nameCultura">Cultura</Form.Label>
              <FormControl
                type="name"
                name="name"
                id="nameCultura"
                placeholder="Informe o nome da cultura"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label for="nameArea">Tamanho da área</Form.Label>
              <FormControl
                type="name"
                name="name"
                id="nameArea"
                placeholder="Informe o tamanho da área"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label for="nameColheita">Época da colheita</Form.Label>
              <FormControl
                type="name"
                name="name"
                id="nameColheita"
                placeholder="Informe a época da colheita"
              />
            </Form.Group>
          </Form>
          <Form className="col-md-6">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Tratos culturais</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea2">
              <Form.Label>Manejo</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </div>
        <Button variant="primary" style={{ float: "right", marginLeft: 15 }}>
          Salvar
        </Button>
        <Button variant="danger" style={{ float: "right", marginLeft: 11 }}>
          Cancelar
        </Button>
      </div>
    </>
  );
}
