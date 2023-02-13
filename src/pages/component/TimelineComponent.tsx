import React from "react";
import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Post from "../Model/Post";
import PostComponent from "./PostComponent";

interface TimelineProp {
  posts: Post[];
}

const TimelineComponent: FunctionComponent<TimelineProp> = ({ posts }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [title, setTitle] = React.useState(posts);

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}>
            {posts.map((p) => {
              return <PostComponent post = {p}></PostComponent>;
            })}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default TimelineComponent;