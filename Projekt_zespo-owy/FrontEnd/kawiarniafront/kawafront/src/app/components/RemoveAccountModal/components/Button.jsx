import React, { useState } from "react";
import { getFetchHeader } from "../../../helpers";
import useToken from "../../../hooks/useToken";
import { kURL } from "../../../helpers/consts";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import userActions from "../../../redux/user/actions";
import { useHistory } from "react-router-dom";
function Button({ children, type, callback }) {
  const token = useToken();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    switch (type) {
      case "remove":
        if (!isClicked) {
          fetch(`${kURL}/users`, getFetchHeader("DELETE", token, null))
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
              toast.success(res.message, {
                onClose: () => {
                  history.push("/");
                  dispatch(userActions.logoutUser());
                },
              });
            })
            .catch((err) => {
              setIsClicked(false)
              toast.error(err.message);
            });
        }
        setIsClicked(true);
        break;
      case "cancel":
        callback(false);
        break;
      default:
        break;
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`removeAccountModal__button ${type}`}
    >
      {children}
    </button>
  );
}
export default Button;
