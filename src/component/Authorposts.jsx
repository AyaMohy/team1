import {PostsData} from "./PostsData";

export function Authorposts({AuthorData,PostsList}){

    return(
        <> 
           <h1>Author {AuthorData.id} Data:</h1>
           <h2>{AuthorData.name}</h2>
           <h2>{AuthorData.email}</h2>
           <h2>{AuthorData.phone}</h2>
           <h2>{AuthorData.website}</h2>
           <h1>Author's Posts List:</h1>
           {
               PostsList.map((Post) => <PostsData key={Post.id} Post={Post}/>)
           }
        </>
    );
}