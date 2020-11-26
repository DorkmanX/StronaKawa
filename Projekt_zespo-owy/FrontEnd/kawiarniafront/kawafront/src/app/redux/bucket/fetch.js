import { getFetchHeader } from "../../helpers";
import { kURL } from "../../helpers/consts";
export const fetchbucket = (token) => {
  const promise = fetch(
    `${kURL}/buckets`,getFetchHeader('GET',token,null)
  );
  return promise;
};
