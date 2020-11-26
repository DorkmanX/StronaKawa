import React from "react";
import { Wrapper, Container, Button } from "./components";
import "./RemoveAccountModal.scss";
import { useTranslation } from "react-i18next";
function RemoveAccountModal({ onClose }) {
  const { t } = useTranslation();
  return (
    <Wrapper callback={onClose}>
      <Container>
        <H1>
          {`${t("do")} ${t("you")} ${t("wantC")} ${t("removeC")} ${t(
            "account"
          )} ?`}
        </H1>
      </Container>
      <Container>
        <Button type="cancel" callback={onClose}>
          {t("cancelM")}
        </Button>
        <Button type="remove">{t("remove")} </Button>
      </Container>
    </Wrapper>
  );
}
export default RemoveAccountModal;
const H1 = ({ children }) => <h1>{children}</h1>;
