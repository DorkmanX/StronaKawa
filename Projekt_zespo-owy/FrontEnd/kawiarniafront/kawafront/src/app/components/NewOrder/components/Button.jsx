import React from "react";
import { elementScrollIntoView } from "../../../helpers";
const Button = ({ children }) => {
  function handleClick() {
    elementScrollIntoView(".newOrder");
  }
  return (
    <button onClick={handleClick} className="newOrder__btn">
      {children}
    </button>
  );
};

export default Button