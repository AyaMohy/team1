import { useParams } from "react-router-dom";
import { usePostData } from "../hook/usePostData";
import {PostDetails} from "../component/PostDetails";
import { usePostComments } from "../hook/usePostComments";

export function PostDetailsPage(){

  const { postid } = useParams();

  //getting the post data
  const postData= usePostData(postid);

  //getting the comments list
  const commentsList= usePostComments(postid);

  return(
      <PostDetails key={postData.id} postData={postData} commentsList={commentsList}/>
  );
}