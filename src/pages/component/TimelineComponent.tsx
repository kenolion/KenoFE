import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Post from "../Model/Post";
import PostComponent from "./PostComponent";

interface TimelineProp {}
type TimelineState = {
  data: Post[] | null;
  loading: boolean;
};

class TimelineComponent extends React.Component<TimelineProp, TimelineState> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const [title, setTitle] = React.useState(posts);

  constructor(postProp: TimelineProp) {
    super(postProp);
    this.state = {
      data: null,
      loading: false,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:4000/post");  //
        if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const jsonData = await response.json();
   // const response = require("../../Resource/temp.json");


   // const jsonData = response.data; //await response.json();

    this.setState({ data: jsonData, loading: false });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <>
        <Container>
        <Row>
          <Button href="\addPost">Add Post</Button>
        </Row>
          <Row>
            <Col xs={10}>
              {loading || data === null
                ? "loading..."
                : data.map((p) => {
                    return <PostComponent post={p}></PostComponent>;
                  })}
            </Col>
          </Row>
        </Container>
        {/* <div className="container">
          <div className="row">
            <div className="col-md-4"> 
              <div className="card">
         
                <div className="card-body">
                  <h5 className="card-title">User Name</h5>
                  <p className="card-text">
                    Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Post Title</h5>
                  <p className="card-text">
                    Post content: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4"></div>
          </div>
        </div> */}
 
      {/* <Container fluid className="mt-5 main-content">
        <Row className="mb-5">
          <Col md={12}>
            <h1>Welcome to My Website</h1>
            <p>
              This is a modern single-page template created using React and React Bootstrap.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              We are a team of dedicated professionals providing top-notch services to our clients.
            </p>
            <Button variant="primary">Learn more</Button>
          </Col>
          <Col md={6}>
            <h2>Services</h2>
            <p>
              We offer a wide range of services to cater to your needs and requirements.
            </p>
            <Button variant="primary">Explore services</Button>
          </Col>
        </Row>
      </Container> */}

  
      </>
    );
  }
}

export default TimelineComponent;
