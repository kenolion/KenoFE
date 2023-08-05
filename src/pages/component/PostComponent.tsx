import React from "react";
import { Card, Button } from "react-bootstrap";
import Post from "../Model/Post";

interface PostProp {
  post: Post;
}



const PostComponent = (props: PostProp) => {

  return (
    <>
    {/* <div className="post">
      <div>{this.props.post.usrId}</div>
      <div className="content">{this.props.post.content}</div>
    </div> */}
    <Card key={props.post.id}>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text >
          {props.post.content}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </>
  );
};
  

export default PostComponent;
