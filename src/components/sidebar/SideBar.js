import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import { openMainRequest } from "../../store/modules/main/actions";

import { useDispatch } from "react-redux";

export default function SideBar({ isOpen }) {
  const dispatch = useDispatch();

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <Button
          variant="link"
          onClick={() => {
            dispatch(openMainRequest(isOpen));
          }}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
        <h3>Irriga</h3>
      </div>

      <Nav className="flex-column pt-2">
        <p className="ml-3">Menu</p>

        <Nav.Item className="active">
          <Nav.Link href="/dashboard">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Painel de controle
          </Nav.Link>
        </Nav.Item>

        <SubMenu
          title="Cadastros"
          icon={faCopy}
          items={["Link", "Link2", "Active"]}
        />

        <Nav.Item>
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
