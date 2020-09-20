import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

export default function Content({ children, isOpen }) {
  return (
    <Container fluid className={classNames("content", { "is-open": isOpen })}>
      <NavBar />
      {children}
    </Container>
  );
}
