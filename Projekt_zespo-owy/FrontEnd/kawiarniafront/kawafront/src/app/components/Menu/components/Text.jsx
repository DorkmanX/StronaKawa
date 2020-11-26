import React from "react";

const Text = ({ children, type }) => (
  <span className={`menu__text ${type}`}>{children}</span>
);
export default Text;
