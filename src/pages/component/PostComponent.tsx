import { FunctionComponent } from "react";
import Post from "../Model/Post";

interface PostProp {
  post: Post;
}

const PostComponent: FunctionComponent<PostProp> = ({ post }) => {
  return (
    <>
      <div className="post">
        <div>{post.usrId}</div>
        <div className="content">{post.content}</div>
      </div>
    </>
  );
};

export default PostComponent;
