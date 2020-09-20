import React from "react";

import { Container, Form } from "react-bootstrap";

import { Time } from "./styles";

import "./index.css";

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>09 de setembro</strong>
      </header>
      <ul>
        <Time past>
          <span id="time" style={{ fontWeight: "bold" }}>
            09:00
          </span>
          <span>Setor alfaces</span>
        </Time>
        <Time available>
          <Form>
            <span id="time" style={{ fontWeight: "bold" }}>
              09:00
            </span>
            <span>Setor cenouras</span>

            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              size="80px"
              w-50
              onChange={() => {
                alert("It's works!");
              }}
            ></Form.Check>
          </Form>
        </Time>
        <Time available>
          <Form>
            <span id="time" style={{ fontWeight: "bold" }}>
              09:00
            </span>
            <span>Setor couves</span>
            <Form.Check
              type="switch"
              id="exampleCustomSwitch2"
              name="customSwitch"
              size="30px"
              label=""
              onChange={() => {
                alert("It's works!");
              }}
              disabled
            ></Form.Check>
          </Form>
        </Time>
        <Time available>
          <Form>
            <span id="time" style={{ fontWeight: "bold" }}>
              09:00
            </span>
            <span>Setor beterraba</span>
            <Form.Check
              type="switch"
              label=""
              id="exampleCustomSwitch3"
              name="customSwitch"
              size="30px"
            ></Form.Check>
          </Form>
        </Time>
      </ul>
    </Container>
  );
}
