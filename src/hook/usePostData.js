

import { useEffect, useState } from "react";

const postUrl = "https://jsonplaceholder.typicode.com/posts";

export function usePostData(postid) {
  
  const [post, setPost] = useState({});
  

  useEffect(() => {
    fetch(`${postUrl}/${postid}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);});
  }, [postid]);

  return post;
}