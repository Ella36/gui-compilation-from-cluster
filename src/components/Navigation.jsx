import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" fixed="top" variant="dark"> 
        <Container>
          <Navbar.Brand href="home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="find">Find</Nav.Link>
            <Nav.Link href="select">Select</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
};