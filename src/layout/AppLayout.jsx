import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="black">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://i0.wp.com/designcompass.org/wp-content/uploads/2024/12/logo-netflix.png?w=1600&ssl=1"
              alt=""
              width="100"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/movies" style={{ color: "white" }}>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
      >
        {/* route안에 있는 자손들을 갖고오게 도와준다 */}
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
