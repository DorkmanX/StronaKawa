import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userAction from "../../../redux/user/actions";

import { getInputPlaceholder } from "../../../helpers";
const Input = ({ name, type = "text", disabled }) => {
  const user = useSelector((state) => state.user.data);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  function getValue() {
    const {
      username,
      password,
      email,
      telephone,
      firstName,
      lastName,
      houseNumber,
      dateOfBirth,
      road,
      zipcode,
      place,
    } = user;
    switch (name) {
      case "username":
        return username;
      case "password":
        return password;
      case "email":
        return email;
      case "telephone":
        return telephone;
      case "firstName":
        return firstName;
      case "lastName":
        return lastName;
      case "houseNumber":
        return houseNumber;
      case "dateOfBirth":
        return dateOfBirth;
      case "road":
        return road;
      case "zipcode":
        return zipcode;
      case "place":
        return place;
      default:
        break;
    }
  }
  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(userAction.changeInputValue({ name, value }));
  }
  function handleValidation() {
    setIsFocused(!isFocused);
  }
  return (
    <input
      name={name}
      type={type}
      onFocus={handleValidation}
      onBlur={handleValidation}
      className="login__input"
      onChange={handleChange}
      value={getValue()}
      required
      placeholder={isFocused ? getInputPlaceholder(name) : ""}
      disabled={disabled}
    />
  );
};
export default Input;
