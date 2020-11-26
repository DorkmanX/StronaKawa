import React, { lazy, Suspense } from "react";
import "./Menu.scss";
import { useTranslation } from "react-i18next";
import { Wrapper, Block, Container, Text } from "./components";
import TextLoop from "react-text-loop";
import LanguageChooser from "../LanguageChooser/LanguageChooser";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
const VideoBackground = lazy(() =>
  import("../VideoBackground/VideoBackground")
);
const Menu = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Suspense fallback={<LoadingIndicator />}>
        <Container>
          <Block>
            <LanguageChooser />
          </Block>
          <Block name="history">{t("history")}</Block>
          <Block name="bucket">{t("bucket")}</Block>
          <Block name="account">{t("account")}</Block>
          <Block name="newOrder">{t("new order")}</Block>
          <Block name="logout">{t("logout")}</Block>
        </Container>
        <Container>
          <Text type="title">{`${t('coffeeM')} `}</Text>

          <TextLoop mask={true}>
            <Text type="info">
              {`Ludwik van Beethoven ${t("was")} ${t("her")} ${t("big")} ${t(
                "fan"
              )} `}{" "}
            </Text>
            <Text type="info">
              {`${t("in")} USA ${t('it')} ${t("was")} ${t("beverage")} ${t("drinked")} ${t(
                "only"
              )} ${t("in")} ${t("dinnertime")}  `}
            </Text>
            <Text type="info">
              {`${t("her")} ${t("first")} ${t("advertisement")} ${t("wasD")} ${t("leaflet")} `}
            </Text>
            <Text type="info">
              {`${t("has")} ${t("over")} XI ${t("centuries")} `}
            </Text>
          </TextLoop>
        </Container>
        <VideoBackground indexOfVideo={0} />
      </Suspense>
    </Wrapper>
  );
};

export default Menu;
