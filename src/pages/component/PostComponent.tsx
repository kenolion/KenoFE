import React from "react";
import { Card, Button } from "react-bootstrap";
import Post from "../Model/Post";

interface PostProp {
  post: Post;
}
type PostState = {
  data: Post | null;
};

class PostComponent extends React.Component<PostProp, PostState> {
  // constructor(postProp: PostProp) {
  //   super(postProp);
  // }

  render() {
    return (
      <>
        {/* <div className="post">
          <div>{this.props.post.usrId}</div>
          <div className="content">{this.props.post.content}</div>
        </div> */}
        <Card>
          <Card.Body>
            <Card.Title>{this.props.post.title}</Card.Title>
            <Card.Text >
              {this.props.post.content}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default PostComponent;
