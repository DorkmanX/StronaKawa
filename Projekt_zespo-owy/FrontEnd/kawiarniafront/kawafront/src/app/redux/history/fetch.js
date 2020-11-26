import { getFetchHeader } from "../../helpers";
import { kURL } from "../../helpers/consts";

export const fetchHistory = (token) => {
  const promise = fetch(
    `${kURL}/histories`,
    getFetchHeader("GET", token, null)
  );
  return promise;
};
