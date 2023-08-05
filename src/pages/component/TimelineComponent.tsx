import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import Post from "../Model/Post";
import PostComponent from "./PostComponent";
import {  useNavigate } from "react-router-dom";

const TimelineComponent = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  let navigate = useNavigate();
  
  // fetches data from http://localhost:4000/post
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/post");
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
      console.log(error);
    }
  };

  const navToPost = () => {
    navigate("/addPost");
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Button onClick={navToPost}>Add Post</Button>
        </Row>
        <Row>
          <Col xs={10}>
            {loading || data === null
              ?     <Spinner className="center" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
              : data.map((p) => {
                  return <PostComponent post={p}></PostComponent>;
                })}
            {error && <div>{error}</div>}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TimelineComponent;
