import React from "react";

import { useSelector, useDispatch } from "react-redux";
import userActions from "../../../redux/user/actions";

const Button = ({ children }) => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  function handleRegister() {
    dispatch(userActions.fetchRegisterUser(user));
  }
  return (
    <button onClick={handleRegister} className="signIn__button">
      {children}
    </button>
  );
};
export default Button;
