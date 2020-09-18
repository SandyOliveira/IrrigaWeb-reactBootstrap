import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";
import SideBar from "../../../components/sidebar/SideBar";
import Content from "../../../components/content/Content";

import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  /**
   * Add event listener
   */
  useEffect(() => {
    window.addEventListener("resize");
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <div className="App wrapper">
      <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
      <Content
        toggle={this.toggle}
        isOpen={this.state.isOpen}
        children={children}
      />
    </div>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
