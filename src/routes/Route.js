import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const [previousWidth, setPreviousWidth] = useState(-1);
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  function updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      setIsOpen(!isMobile);
    }

    setPreviousWidth(width);
  }
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout toggle={toggle} isOpen={isOpen}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
