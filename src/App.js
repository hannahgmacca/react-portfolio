import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import {Col, Container, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavComponent from "./components/nav.component.js"
import Landing from "./components/landing.component.js";
import Contact from "./components/contact.component";
import About from "./components/about.component";
import Projects from "./components/projects.component.js";
import BackgroundSVG1 from "./images/ellipse1.svg";
import BackgroundSVG2 from "./images/ellipse2.svg";
import BackgroundSVG3 from "./images/ellipse3.svg";
import BackgroundSVG4 from "./images/ellipse4.svg";
import BackgroundSVG5 from "./images/ellipse5.svg";

function App() {
 return (
  <div className="w-100">
     <Container className="m-0 p-0">
      <Row>
      <Col lg={2} className="w-lg-50">
         <img src={BackgroundSVG1} id="svg1" className="bgSVG"/>
      </Col>
      <Col lg={2} className="w-lg-50">
         <img src={BackgroundSVG2} id="svg2" className="bgSVG"/>
      </Col>
      <Col lg={2} className="w-lg-50">
         <img src={BackgroundSVG3} id="svg3" className="bgSVG"/>
      </Col>
      <Col lg={2} className="w-lg-50">
         <img src={BackgroundSVG4} id="svg4" className="bgSVG"/>
      </Col>
      <Col lg={2} className="w-lg-50">
         <img src={BackgroundSVG5} id="svg5" className="bgSVG"/>
      </Col>
     </Row>
     </Container>
   
     <div className="app w-100">
     <Router>

     <NavComponent />
        
        <br/>
        <Routes>
        <Route path="/" exact element={<Landing/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
   
     </Router>
     </div>
  </div>
   
 );
}
 
export default App;