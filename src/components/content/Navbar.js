import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { openMainRequest } from "../../store/modules/main/actions";

export default function NavBar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit() {
    setIsOpen(!isOpen);
    dispatch(openMainRequest(isOpen));
  }
  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand
    >
      <Button
        variant="outline-info"
        onClick={() => {
          handleSubmit();
        }}
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" navbar>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
