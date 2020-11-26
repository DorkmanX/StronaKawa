import React from "react";
import { useDispatch } from "react-redux";
import bucketActions from "../../../redux/bucket/actions";

import { useHistory } from "react-router-dom";
import {useTranslation} from 'react-i18next'
const Button = ({ idx, children, name,onModalOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  function handleClick() {
    switch (name) {
      case "payForSelectedProducts":
        history.push("/panel/pay");
        break;
      case "delete":
        dispatch(bucketActions.setElementToDelete(idx));
        onModalOpen()
        break;
      default:
        break;
    }
  }
  return (
    <button
      title={t(name)}
      onClick={handleClick}
      name={name}
      className={`bucket__button  bucket__button--${name}`}
    >
      {children}
    </button>
  );
};
export default Button;
