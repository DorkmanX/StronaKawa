import { kURL } from "../../helpers/consts";
import { getFetchHeader } from "../../helpers";

export const fetchUser = (user) => {
  const { username, password } = user;
  const promise = fetch(
    `${kURL}/login`,
    getFetchHeader("POST", null, JSON.stringify({ username, password }))
  );
  return promise;
};
export const fetchRegisterUser = (user) => {
  
  const promise = fetch(
    `${kURL}/signIn`,
    getFetchHeader("POST", null, JSON.stringify(user))
  );
  return promise;
};


//-----
/*
export const fetchUser = (user) => {
  const { username, password } = user;
  console.log("dane: ", username, password);
  const promise = fetch(
    `${kURL}/login`,
    {
      method: 'POST',
      mode: 'cors',      
      headers: { 
        'Content-Type': 'application/json',  
        'Authorization': `Bearer ${null}`
      },
      body: JSON.stringify({username, password})
    }
  );
  return promise;
};*/