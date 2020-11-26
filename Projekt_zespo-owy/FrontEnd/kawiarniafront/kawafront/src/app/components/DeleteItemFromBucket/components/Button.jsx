import React, { useState } from "react";
import useToken from "../../../hooks/useToken";
import getFetchHeader from "../../../helpers/getFetchHeader";
import { kURL } from "../../../helpers/consts";
import { toast } from "react-toastify";

import bucketActions from "../../../redux/bucket/actions";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
const Button = ({ children, type, itemId, onModalClose }) => {
  const token = useToken();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    switch (type) {
      case "deleteItem":
        if (!isClicked) {
          fetch(
            `${kURL}/orders/${itemId}`,
            getFetchHeader("DELETE", token, null)
          )
            .then((res) => res.text())
            .then((res) => {
              if (res.status === 406) {
                toast.error(res.message);
                setIsClicked(false);
              } else {
                onModalClose();
                dispatch(bucketActions.fetchBucket(token));
                toast.success(`${t("deleted")} ${t("from")} ${t("bucket")}`, {
                  position: "top-left",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  onClose: () => {
                    dispatch(bucketActions.setElementToDelete({}));
                  },
                });
              }
            })
            .catch((err) => {
              setIsClicked(false);
              toast.error(err.message);
            });
        }
        setIsClicked(true);
        break;
      case "backToPanel":
        onModalClose();
        break;
      default:
        break;
    }
  }
  return (
    <button onClick={handleClick} className="deleteItemFromBucket__button">
      {children}
    </button>
  );
};
export default Button;
