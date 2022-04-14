
import { useEffect, useReducer } from "react";
import {postsReducer} from "../Redux/reducerFunctions";
import {postsState} from "../Redux/states";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export function usePosts() {

  const [state,dispatch]=useReducer(postsReducer,postsState);

  useEffect(() => {
    fetch(postsUrl)
      .then((response) => response.json())
      .then((json) => dispatch({type:"fetched",payload:json}));
  }, []);
  
  return state.postsList;
}