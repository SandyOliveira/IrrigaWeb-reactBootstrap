import React from "react";

import { Formik, Form } from "formik";

import { Time } from "./styles";

import "./index.css";
import Switch from "react-bootstrap/esm/Switch";

export default function Dashboard() {
  return (
    <>
      <header className="shadow-sm p-3 mb-2 rounded ">
        <strong>09 de setembro</strong>
      </header>
      <Formik
        initialValues={{ switch: false }}
        onSubmit={(values) => console.log(values)}
        render={({ values, errors, touched, handleChange, handleSubmit }) => (
          <ul>
            <Time past>
              <span id="time" style={{ fontWeight: "bold" }}>
                09:00
              </span>
              <span>Setor alfaces</span>
            </Time>
            <Time available>
              <span id="time" style={{ fontWeight: "bold" }}>
                09:00
              </span>
              <span>Setor cenouras</span>

              <Switch
                type="switch"
                name="switch1"
                id="custom-switch"
                label=""
                size="80px"
                w-50
                onChange={() => {
                  alert("It's works!");
                }}
              ></Switch>
            </Time>
            <Time available>
              <span id="time" style={{ fontWeight: "bold" }}>
                09:00
              </span>
              <span>Setor couves</span>
              <Switch
                type="switch"
                id="exampleCustomSwitch2"
                name="customSwitch"
                size="30px"
                label=""
                onChange={() => {
                  alert("It's works!");
                }}
                disabled
              ></Switch>
            </Time>
            <Time available>
              <Form>
                <span id="time" style={{ fontWeight: "bold" }}>
                  09:00
                </span>
                <span>Setor beterraba</span>
                <Switch
                  type="switch"
                  label=""
                  id="exampleCustomSwitch3"
                  name="customSwitch"
                  size="30px"
                ></Switch>
              </Form>
            </Time>
          </ul>
        )}
      />
    </>
  );
}
