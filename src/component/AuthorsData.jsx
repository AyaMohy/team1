import { useNavigate } from "react-router-dom";

export function AuthorsData({ Author }) {
   const navigate = useNavigate();
  return (
    <>
      <h2>{Author.id} {Author.name}</h2>
      <button onClick={() => {
          navigate(`/authors/${Author.id}`);
        }}>View Author's Details and Posts</button> 
    </>
  );
}