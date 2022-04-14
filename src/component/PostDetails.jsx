

export function PostDetails({postData,commentsList}){

    return(
        <>
           <h1>Post "  {postData.id} " Data:</h1>
           <h2>{postData.title}</h2>
           <h2>{postData.body}</h2>
           <h1>Comments List:</h1>
           {
               commentsList.map((comment) => <>
                                        <h3>{comment.id} {comment.name}</h3>
                                        <h3>{comment.body}</h3>
               </>
               )
           }
        </>
    );
}