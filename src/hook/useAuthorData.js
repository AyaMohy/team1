//getspecific author data

import { useEffect, useState } from "react";

const authorUrl = "https://jsonplaceholder.typicode.com/users";

export function useAuthorData(authorid) {
  
  const [author, setAuthor] = useState({});
  

  useEffect(() => {
    fetch(`${authorUrl}/${authorid}`)
      .then((response) => response.json())
      .then((json) => {
        setAuthor(json);});
  }, [authorid]);

  return author;
}