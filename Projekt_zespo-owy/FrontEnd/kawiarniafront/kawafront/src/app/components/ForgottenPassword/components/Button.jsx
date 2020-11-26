import React,{useState} from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { kURL } from "../../../helpers/consts";
import getFetchHeader from "../../../helpers/getFetchHeader";
function Button({ type, children, email, setError }) {
  const history = useHistory();
  const [isClicked,setIsClicked] = useState(false)
  function handleClick() {
    switch (type) {
      case "reset":
        setIsClicked(true)
        if (email.length !== 0 && !isClicked) {
          fetch(
            `${kURL}/users/forgotten`,
            getFetchHeader("POST", null, JSON.stringify({ email }))
          )
            .then((res) => res.json())
            .then((info) => {
              setIsClicked(false)
              toast.info(info.message, { onClose: () => history.push("/") });
            })
            .catch((err) => {
              console.log(err);
              setIsClicked(false)
              setError(err);
            });
        } else {
          toast.error("Podaj poprawny email");
          setIsClicked(false)
        }
        break;
      case "goBack":
        history.push("/");
        break;
      default:
        break;
    }
  }
  return (
    <button onClick={handleClick} className="forgottenPassword__button">
      {children}
    </button>
  );
}
export default Button;
