import React from "react";
import { getLanguageBackground } from "../../../helpers";
import { useTranslation } from "react-i18next";
const Field = ({ lang }) => {
  const { i18n } = useTranslation();
  function handleClick(e) {
    e.preventDefault()
    i18n.changeLanguage(lang);
  }
  return (
    <button
      onClick={handleClick}
      name={lang}
      title={lang}
      style={getLanguageBackground(lang)}
      className="languageChooser__field"
    ></button>
  );
};
export default Field;
