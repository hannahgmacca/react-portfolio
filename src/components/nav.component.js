import React, { Component} from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom';

export default class NavComponent extends Component {

  render() {
    return (
      <Navbar expand="lg" className="w-100 mt-4">
        <Container className="">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="/" className="mx-4">Home</Nav.Link>
              <Nav.Link href="/about" className="mx-4">About</Nav.Link>
              <Nav.Link href="/projects" className="mx-4">Projects</Nav.Link>
              <Nav.Link href="/contact" className="mx-4">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      //   <Link to="/" className="navbar-brand">Home</Link>
      //   <div className="collpase navbar-collapse">
      //   <ul className="navbar-nav mr-auto">
      //     <li className="navbar-item">
      //     <Link to="/about" className="nav-link">About</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/projects" className="nav-link">Projects</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/contact" className="nav-link">Contact</Link>
      //     </li>
      //   </ul>
      //   </div>
      // </nav>
    );
  }
}