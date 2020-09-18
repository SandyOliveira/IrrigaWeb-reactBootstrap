import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

export default function Content({ isOpen, toggle, children }) {
  {
    console.log(children);
  }
  return (
    <Container fluid className={classNames("content", { "is-open": isOpen })}>
      <NavBar toggle={toggle} />
      {children}
    </Container>
  );
}
