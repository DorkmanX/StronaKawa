import React from "react";

function Input({ value, callback }) {
  return (
    <input
      placeholder="Twój email"
      className="forgottenPassword__input"
      type="text"
      value={value}
      onChange={(e) => callback(e.target.value)}
    />
  );
}
export default Input;
