import { useAuthorData } from "../hook/useAuthorData";
import {usePosts} from "../hook/usePosts";
import {Authorposts} from "../component/Authorposts";
import { useParams } from "react-router-dom";

import {CreatePostModal} from "../component/CreatePostModal";


export function AuthorDetails() {

const { authorid } = useParams();


const AuthorData = useAuthorData(authorid);


const PostsList= usePosts();

  return (
    <><div>
        <Authorposts key={AuthorData.id} AuthorData={AuthorData} PostsList={PostsList} />
    </div>
    <CreatePostModal authorid={authorid}/>
    </>
  );
}