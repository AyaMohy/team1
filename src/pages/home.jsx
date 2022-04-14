
import { useAuthors } from "../hook/useAuthors";
import {AuthorsData} from "../component/AuthorsData";

export function Home() {
  const AuthorsList = useAuthors();

  return (
    <>
      <h1>Weclome to the Blog</h1>
      <h2>Here is the list of Authors</h2>
      {AuthorsList.map((Author) => (
        <AuthorsData key={Author.id} Author={Author} />
      ))}
    </>
  );
}