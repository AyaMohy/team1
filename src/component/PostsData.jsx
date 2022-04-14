import { useNavigate } from "react-router-dom";

export function PostsData({ Post }) {
   const navigate = useNavigate();
  return (
    <>
      <h3>{Post.id}</h3>
      <h2>{Post.title}</h2>
      <button onClick={() => {
          navigate(`/posts/${Post.id}`);
        }}>View Post's Details</button> 
    </>
  );
}