import React from "react";
import userActions from "../../../redux/user/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Button = ({ isSubmit, name, children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { i18n } = useTranslation();
  const user = useSelector((state) => state.user.data);
  function handleClick(event) {
    switch (name) {
      case "setPl":
        i18n.changeLanguage("pl");

        break;
      case "setEn":
        i18n.changeLanguage("en-US");

        break;
      case "setDe":
        i18n.changeLanguage("de");

        break;
      case "login":
        dispatch(userActions.fetchUser(user));
        break;
      case "signIn":
        dispatch(userActions.clearUserInputs());
        history.push("/signin");
        break;
      case "forgottenPassword":
        history.push("/forgottenpassword");
        break;
      default:
        break;
    }
  }
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      name={name}
      onClick={handleClick}
      className={
        name === "forgottenPassword"
          ? "login__forgottenPassword"
          : "login__button"
      }
    >
      {children}
    </button>
  );
};
export default Button;
