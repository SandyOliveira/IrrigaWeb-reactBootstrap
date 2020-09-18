import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";
import SideBar from "../../../components/sidebar/SideBar";
import Content from "../../../components/content/Content";

import PropTypes from "prop-types";

export default function AuthLayout({ children, toggle, isOpen }) {
  return (
    <div className="App wrapper">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Content toggle={toggle} isOpen={isOpen} children={children} />
    </div>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
