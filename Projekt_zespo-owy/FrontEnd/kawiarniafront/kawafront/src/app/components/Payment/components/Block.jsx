import React, { useState } from "react";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useToken from "../../../hooks/useToken";
import { kURL } from "../../../helpers/consts";
import { getFetchHeader } from "../../../helpers";
import { useTranslation } from "react-i18next";
const Block = ({ children, type, orderedProducts }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const token = useToken();

  const order = useSelector((state) => state.order);
  const [isClicked, setIsClicked] = useState(false);
  const adressObj = useSelector((state) => state.order.adress);
  const latLng = useSelector((state) => state.order.latLng);

  function handleClick() {
    switch (type) {
      case "addToBucket":
        setIsClicked(true);
        if (!isClicked) {
          const obj = {
            coffeeName: order.coffeeName,
            espressoCount: order.espressoCount,
            milkCount: order.milkCount,
            isContainChocolate: order.isContainChocolate,
            price: order.price,
          };

          fetch(
            `${kURL}/orders`,
            getFetchHeader("POST", token, JSON.stringify(obj))
          )
            .then((res) => res.text())
            .then(() =>
              toast.success(`${t("added")} ${t("to")}  ${t("bucketD")} `, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                onClose: () => {
                  history.push("/panel");
                },
              })
            )
            .catch((err) => toast.error(t(err)));
        }

        return;
      case "onDelivery":
        setIsClicked(true);
        let address;
        const { road, houseNumber, zipcode, place } = adressObj;

        if (latLng) {
          address = {
            road,
            houseNumber,
            zipcode,
            place,
            latLng: { latitude: latLng[0], longitude: latLng[1] },
          };
        } else {
          address = {
            road,
            houseNumber,
            zipcode,
            place,
            latLng: { latitude: 0, longitude: 0 },
          };
        }
        let body = { orderedProducts, address, token: "" };
        fetch(
          `${kURL}/payment/onDelivery`,
          getFetchHeader("POST", token, JSON.stringify(body))
        )
          .then((res) => {
            toast.info(`${t("payment")} ${t("in")} ${t("process")}`);
            return res.json();
          })
          .then((res) => {
            if (res.status === 406) {
              window.scrollTo({ x: 0, y: 0 });
              toast.error(t(res.message), {
                onClose: () => {
                  history.push("/panel");
                },
              });
            } else {
              window.scrollTo({ x: 0, y: 0 });
              toast.success(t(res.message), {
                onClose: () => {
                  history.push("/panel");
                },
              });
            }
          })
          .catch((err) => toast.error(t(err.message)));
        return;

      default:
        return;
    }
  }
  return (
    <div onClick={handleClick} className="payment__block">
      {children}
    </div>
  );
};
export default Block;
