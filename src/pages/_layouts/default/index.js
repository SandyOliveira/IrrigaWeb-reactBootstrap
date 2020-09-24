import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";
import SideBar from "../../../components/sidebar/SideBar";
import Content from "../../../components/content/Content";

import PropTypes from "prop-types";

import { useSelector } from "react-redux";

//export default function AuthLayout({ children, toggle, isOpen }) {
export default function AuthLayout({ children }) {
  const isOpen = useSelector((state) => state.main.isOpen);

  return (
    <div className="App wrapper">
      <SideBar isOpen={isOpen} />
      <Content isOpen={isOpen} children={children} />
    </div>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
