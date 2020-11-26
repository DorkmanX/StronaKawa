import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../../redux/user/actions";

function getOptionCollection(type, callback) {
  let arr = [];
  switch (type) {
    case "day":
      for (let i = 1; i < 32; i++) {
        arr.push(i);
      }
      return arr;

    case "month":
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    case "year":
      const minimalAge = 16;
      for (let i = 1920; i <= new Date().getFullYear() - minimalAge; i++) {
        arr.push(i);
      }
      return arr;
    default:
      break;
  }
}
function getValue(type, dateOfBirth) {
  switch (type) {
    case "day":
      return dateOfBirth.day;
    case "month":
      return Number.parseInt(dateOfBirth.month);
    case "year":
      return dateOfBirth.year;
    default:
      return;
  }
}
function Select({ type }) {
  const date = useSelector((state) => state.user.data.dateOfBirth);
  const [actualVal, setActualVal] = useState(getValue(type, date));
  const ref = useRef();
  const dispatch = useDispatch();

  function handleChange() {
    const { value } = ref.current;
    setActualVal(value);
    dispatch(userActions.changeInputValue({ name: type, value }));
  }

  return (
    <select
      value={actualVal}
      ref={ref}
      onChange={handleChange}
      className="select-css"
    >
      {getOptionCollection(type).map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
export default Select;
