import React from "react";
import { useDispatch } from "react-redux";
import orderActions from "../../../redux/order/actions";
import { getCoffeeBackground } from "../../../helpers";
import {useTranslation} from 'react-i18next'
const Coffee = ({ name }) => {
  const dispatch = useDispatch();
  const {t} = useTranslation()
  function handleClick() {
    
    switch (name) {
      case "Mocca":
        dispatch(
          orderActions.setPresetOfCoffee({
            coffeeName: name,
            espressoCount: 3,
            milkCount: 5,
            isContainChocolate: true,
            price: 9.5,
          })
        );
        break;
      case "FlatWhite":
        dispatch(
          orderActions.setPresetOfCoffee({
            coffeeName: name,
            price: 7.5,
            espressoCount: 3,
            milkCount: 3,
            isContainChocolate: false,
          })
        );
        break;
      case "Latte":
        dispatch(
          orderActions.setPresetOfCoffee({
            coffeeName: name,
            price: 7,
            espressoCount: 2,
            milkCount: 4,
            isContainChocolate: false,
          })
        );
        break;
      case "Americana":
        dispatch(
          orderActions.setPresetOfCoffee({
            coffeeName: name,
            espressoCount: 5,
            price: 7.5,
            milkCount: 0,
            isContainChocolate: false,
          })
        );
        break;
      case "Espresso":
        dispatch(
          orderActions.setPresetOfCoffee({
            coffeeName: name,
            espressoCount: 2,
            price: 3,
            milkCount: 0,
            isContainChocolate: false,
          })
        );
        break;
      case "YourOwn":
        dispatch(
          orderActions.setPresetOfCoffee({
            coffeeName: name,
            espressoCount: 0,
            price: 0,
            milkCount: 0,
            isContainChocolate: false,
          })
        );
        break;
      default:
        break;
    }
  }
  return (
    <div
      style={getCoffeeBackground(name)}
      onClick={handleClick}
      className="newOrder__coffee"
    >
      <div className="newOrder__coffeeName">{t(name.toUpperCase())}</div>
    </div>
  );
};
export default Coffee;
