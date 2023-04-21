import "./App.scss";
import { Outlet } from "react-router-dom";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">KenoWeb</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About me</Nav.Link>
              <NavDropdown title="Tools" id="basic-nav-dropdown">
                <NavDropdown.Item href="/nft-gen">
                  NFT generator
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/dfk">DFK</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
          <Row>
            <Col xs={15}>
               <Outlet />
            </Col>
          </Row>
      </Container>
      <footer className="bg-dark text-center py-3 text-light fixed-bottom">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
