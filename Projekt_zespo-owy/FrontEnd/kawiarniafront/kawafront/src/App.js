import React from "react";
import Login from "./app/components/Login/Login";
import "./App.css";
import SignIn from "./app/components/SignIn/SignIn";
import PrivateRoute from "./app/components/PrivateRoute/PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ForgottenPassword from "./app/components/ForgottenPassword/ForgottenPassword";
import Panel from "./app/components/Panel/Panel";
import { Wrapper, Container } from "./app/components/Login/components";
import LoadingIndicator from "./app/components/LoadingIndicator/LoadingIndicator";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/forgottenpassword">
          <ForgottenPassword />
        </Route>
        <PrivateRoute path="/panel">
          <Panel />
        </PrivateRoute>
        <Route render={() => <Redirect to={"/"} />} />
      </Switch>
    </Router>
  );
}
function RootApp() {
  return (
    <React.Suspense
      fallback={
        <Wrapper>
          <Container>
            <LoadingIndicator />
          </Container>
        </Wrapper>
      }
    >
      <App />
    </React.Suspense>
  );
}

export default RootApp;
