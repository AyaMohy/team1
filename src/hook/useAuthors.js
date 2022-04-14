

import { useEffect, useReducer } from "react";
import {authorsReducer} from "../Redux/reducerFunctions";
import {authorsState} from "../Redux/states";

const authorsUrl = "https://jsonplaceholder.typicode.com/users";


export function useAuthors() {
  
  const [state,dispatch]=useReducer(authorsReducer,authorsState);
   
  useEffect(() => {
    fetch(authorsUrl)
      .then((response) => response.json())
      .then((json) => dispatch({type:"fetched",payload:json}));
  }, []);
    
  return state.authorsList;
}