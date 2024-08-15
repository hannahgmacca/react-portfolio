import React, { Component} from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap'

export default class NavComponent extends Component {

  render() {
    return (
      <Navbar expand="lg" className="w-100 mt-4">
        <Container className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="/" className="mx-4">Home</Nav.Link>
              <Nav.Link href="/projects" className="mx-4">Experience</Nav.Link>
              {/* <Nav.Link href="/contact" className="mx-4">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    );
  }
}