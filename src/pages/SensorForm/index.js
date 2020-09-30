import React, { useState } from "react";

import { Formik, Field, Form } from "formik";

import schema from "./schema";

import { Tabs, Tab } from "react-bootstrap-tabs";
// import { Container } from './styles';

export default function SensorForm() {
  return (
    <>
      <div className="shadow-sm p-3 mb-2 rounded ">
        <h3>Cadastro de sensor</h3>
      </div>

      <Tabs onSelect={(index, label) => console.log(label + " selected")}>
        <Tab label="RELE">
          <Formik
            onSubmit={(values) => {
              console.log(values);
              console.log("okkkk1");
            }}
            initialValues={{ nameRele: "" }}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <div>
                    <label htmlFor={"nameRele"}>Nome do Relé</label>
                    <input
                      value={values.nameRele}
                      onChange={handleChange}
                      placeholder="Informe o nome do relé"
                      type="text"
                      name="nameRele"
                      id="nameRele"
                    />
                    {errors.nameRele && touched.nameRele && (
                      <span>{errors.nameRele}</span>
                    )}
                  </div>
                  <div>
                    <label>Porta:</label>
                    <select
                      name="porta"
                      value={values.porta}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#fff",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                    </select>
                  </div>

                  <div>
                    <button
                      type="submit"
                      color="primary"
                      style={{ float: "right", marginLeft: 15 }}
                    >
                      Salvar
                    </button>
                    <button
                      type="reset"
                      style={{ float: "right", marginLeft: 11 }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </Form>
            )}
          />
        </Tab>

        <Tab label="SENSOR">
          <div>
            <Formik
              onSubmit={(values) => {
                console.log(values);
                console.log("okkkk2");
              }}
              initialValues={{ nameSensor: "" }}
              render={({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <div>
                      <label htmlFor={"nameSensor"}>Nome do Sensor</label>
                      <input
                        value={values.nameSensor}
                        onChange={handleChange}
                        placeholder="Informe o nome do sensor"
                        type="text"
                        name="nameSensor"
                        id="nameSensor"
                      />
                      {errors.nameSensor && touched.nameSensor && (
                        <span>{errors.nameSensor}</span>
                      )}
                    </div>
                    <div>
                      <label>Porta:</label>
                      <select
                        name="porta"
                        value={values.porta}
                        onChange={handleChange}
                        style={{
                          backgroundColor: "#fff",
                        }}
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                      </select>
                    </div>

                    <div>
                      <button
                        type="submit"
                        color="primary"
                        style={{ float: "right", marginLeft: 15 }}
                      >
                        Salvar
                      </button>
                      <button
                        type="reset"
                        style={{ float: "right", marginLeft: 11 }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            />
          </div>
        </Tab>

        <Tab label="ATUADOR">
          <span>
            <Formik
              onSubmit={(values) => {
                console.log(values);
                console.log("okkkk2");
              }}
              initialValues={{ nameAtuador: "" }}
              render={({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <div>
                      <label htmlFor={"nameAtuador"}>Nome do Atuador</label>
                      <input
                        value={values.nameAtuador}
                        onChange={handleChange}
                        placeholder="Informe o nome do atuador"
                        type="text"
                        name="nameAtuador"
                        id="nameAtuador"
                      />
                      {errors.nameAtuador && touched.nameAtuador && (
                        <span>{errors.nameAtuador}</span>
                      )}
                    </div>
                    <div>
                      <label>Porta:</label>
                      <select
                        name="porta"
                        value={values.porta}
                        onChange={handleChange}
                        style={{
                          backgroundColor: "#fff",
                        }}
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                      </select>
                    </div>

                    <div>
                      <button
                        type="submit"
                        color="primary"
                        style={{ float: "right", marginLeft: 15 }}
                      >
                        Salvar
                      </button>
                      <button
                        type="reset"
                        style={{ float: "right", marginLeft: 11 }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            />
          </span>
        </Tab>
      </Tabs>
    </>
  );
}
