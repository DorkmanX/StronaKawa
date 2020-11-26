import React from "react";

const Text = ({ children,type="text" }) => <div className={`bucket__${type}`}>{children}</div>;
export default Text;
