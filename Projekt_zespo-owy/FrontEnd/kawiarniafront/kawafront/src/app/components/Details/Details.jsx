import React from "react";
import "./Details.scss";
import { Wrapper, Field, Container } from "./components";
import { useTranslation } from "react-i18next";
function Details({ idx, items }) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      {items.map((item, idx) => {
        const { coffeeName, price } = item;
        return (
          <Container key={idx}>
            <Field>{Number.parseInt(idx)+1}.</Field>
            <Field>
              {t("beverageName")} : {t(coffeeName)}
            </Field>
            <Field>
              {new Intl.NumberFormat(window.navigator.language, {
                style: "currency",
                currency: "PLN",
              }).format(price)}
            </Field>
          </Container>
        );
      })}
    </Wrapper>
  );
}
export default Details;
