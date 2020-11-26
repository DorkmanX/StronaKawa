import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { getInputPlaceholder } from "../../../helpers";
const Input = ({ callback, value, name }) => {
  const ref = useRef();
  const { t } = useTranslation();

  return (
    <input
      ref={ref}
      onChange={() => callback(ref.current.value)}
      value={value}
      type="text"
      className="adressSelector__input"
      placeholder={`${t(name)} ${t('forExample')} ${getInputPlaceholder(name)}`}
    />
  );
};
export default Input;
