import React, { useState, lazy, Suspense } from "react";
import "./ForgottenPassword.scss";
import { Wrapper, Input, Button, Container } from "./components";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
const VideoBackground = lazy(() =>
  import("../VideoBackground/VideoBackground")
);
function ForgottenPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Suspense fallback={<LoadingIndicator />}>
        {error
          ? (() => {
              toast.error(t(error), {
                onClose: setError(null),
              });
            })()
          : null}
        <Container>
          <Input value={email} callback={setEmail} />
        </Container>
        <Container>
          <Button type="reset" email={email} setError={setError}>
            {`${t("reset")}`}
          </Button>
          <Button type="goBack">{`${t('goBack')} `}</Button>
        </Container>
        <VideoBackground indexOfVideo={2} shouldVideoLoop={false} />
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
      </Suspense>
    </Wrapper>
  );
}
export default ForgottenPassword;
