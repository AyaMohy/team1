

import { useEffect, useReducer} from "react";
import {commentsReducer} from "../Redux/reducerFunctions";
import {commentsState} from "../Redux/states";

const commentUrl = "https://jsonplaceholder.typicode.com/posts";

export function usePostComments(postid) {
  
  const [state,dispatch] = useReducer(commentsReducer,commentsState);
  
  useEffect(() => {
    fetch(`${commentUrl}/${postid}/comments`)
      .then((response) => response.json())
      .then((json) => {dispatch({type:"fetched",payload:json})});
  }, [postid]);

  return state.commentsList;
}