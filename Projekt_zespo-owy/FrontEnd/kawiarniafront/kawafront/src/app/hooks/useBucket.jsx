import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { kURL } from "../helpers/consts";
import bucketActions from "../redux/bucket/actions";
import { getFetchHeader } from "../helpers";
import useToken from "../hooks/useToken";

export default () => {
  const dispatch = useDispatch();
  const token = useToken();
  const fetchBucket = () => {
    fetch(`${kURL}/buckets`, getFetchHeader("GET", token, null))
      .then((res) => res.json())
      .then((json) => {
        let person = json.shift();

        dispatch(bucketActions.saveFetchedBucket(person.items));
        console.log("x");
      });
  };
  useEffect(fetchBucket, []);
};
