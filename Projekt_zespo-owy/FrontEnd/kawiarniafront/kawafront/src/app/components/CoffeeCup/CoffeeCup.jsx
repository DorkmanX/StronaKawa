import React from "react";
import "./CoffeeCup.scss";
import { useSelector } from "react-redux";
import FadeIn from "react-fade-in";
import ScrollButton from "../ScrollButton/ScrollButton";
import {
  Block,
  Button,
  Ear,
  Field,
  Fill,
  Properties,
  Input,
  Text,
  Wrapper,
} from "./components";
import { useTranslation } from "react-i18next";
function CoffeeCup() {
  const orderProperties = useSelector((store) => store.order);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Block>
        {Array.apply(null, {
          length: orderProperties.waterCount,
        }).map((e, i) => (
          <FadeIn key={i} delay="100">
            <Fill type="water" />
          </FadeIn>
        ))}
        {Array.apply(null, {
          length: orderProperties.milkCount,
        }).map((e, i) => (
          <FadeIn key={i} delay="100">
            <Fill type="milk" />
          </FadeIn>
        ))}
        {Array.apply(null, {
          length: orderProperties.espressoCount,
        }).map((e, i) => (
          <FadeIn key={i} delay="100">
            <Fill type="coffee" />
          </FadeIn>
        ))}
      </Block>
      <Ear />
      <Properties>
        <Field>
          <Text>{t('milk')}</Text>
          {orderProperties.espressoCount + orderProperties.milkCount < 10 ? (
            <Button name="addMilk">+</Button>
          ) : null}

          {orderProperties.milkCount ? (
            <Button name="deleteMilk">-</Button>
          ) : null}
        </Field>
        <Field>
          <Text>Espresso</Text>
          {orderProperties.espressoCount + orderProperties.milkCount < 10 ? (
            <Button name="addEspresso">+</Button>
          ) : null}
          {orderProperties.espressoCount ? (
            <Button name="deleteEspresso">-</Button>
          ) : null}
        </Field>
        <Field>
          <Text>{t('chocolate')}</Text>
          <Input />
        </Field>
        <Field>
          <Text>{`${t('valueOfYourBeverage')}: ${new Intl.NumberFormat(
            window.navigator.language,
            {
              style: "currency",
              currency: "PLN",
            }
          ).format(orderProperties.price)}`}</Text>
        </Field>
        {orderProperties.price>0?<ScrollButton goTo=".payment"/>:null}
      </Properties>
    </Wrapper>
  );
}
export default CoffeeCup;
