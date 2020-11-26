import React from "react";
import "./DeleteItemFromBucket.scss";
import { Wrapper, Container, Field, Text } from "./components";
import { useSelector } from "react-redux";
import { Button } from "./components";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Redirect } from "react-router";
function DeleteItemFromBucket({ onModalClose }) {
  const { t } = useTranslation();
  const itemToDelete = useSelector((state) => state.bucket.itemToDelete);

  return !itemToDelete ? (
    <Redirect to="/panel"/>
  ) : (
    <Wrapper name={itemToDelete.coffeeName}>
      <Container>
        <Field>
          <Text>{`${t("coffeeName")}`}</Text>
          <Text>{t(itemToDelete.coffeeName)}</Text>
        </Field>
        <Field>
          <Text>{`${t("price")}`} </Text>
          <Text>{itemToDelete.price}</Text>
        </Field>
        <Field>
          <Text>{`${t("espressoCount")} `}</Text>
          <Text>{itemToDelete.espressoCount}</Text>
        </Field>{" "}
        <Field>
          <Text>{`${t("milkCount")} `}</Text>
          <Text>{itemToDelete.milkCount}</Text>
        </Field>
        <Field>
          <Button
            type="deleteItem"
            itemId={itemToDelete.id}
            onModalClose={onModalClose}
          >
            {`${t("delete")} `}
          </Button>
          <Button type="backToPanel" onModalClose={onModalClose}>{`${t(
            "goBack"
          )} `}</Button>
        </Field>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Wrapper>
  );
}
export default DeleteItemFromBucket;
