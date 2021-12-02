import React, { Component } from 'react';
import Project from '../components/project.component';
import {Col, Container, Row} from 'react-bootstrap';
import Lady from "../images/lady.svg";
import Terminal from "../images/terminal.png";
import Outsource from "../images/outsource.png";
import Tutal from "../images/tutal.png";
import Pokemon from "../images/pokemon.png";
import CSS from "../images/css.png";
import JS from "../images/js.png"
import HTML from "../images/html.png"
import Rails from "../images/rails.png";
import ReactImg from "../images/react.png"
import Git from "../images/git.png";
import LinkedIn from "../images/linkedin.png";
import Medium from "../images/medium.png";
import GitHub from "../images/github.png";

export default class Landing extends Component {
  render() {
    return (
      <div>
          <Container className="remove-all-margins">
            <Row className="px-5 mt-lg-5"></Row>
            <Row className="px-5"></Row>
            <Row className="px-2 mt-5 w-100 mx-auto">
              <Col lg={4} className="mx-auto ms-lg-3 mt-lg-5">
                <h1 className="text-lg-start text-center">Welcome!</h1>
                <p className="text-lg-start text-center">
                  My name is Hannah. I’m a junior website developer with a love for user experience, food and writing. <br/><br/>
                  I love combining convention with creativity in order to problem solve.
                </p>
                <Container classname="social-links">
                  <Row className="mt-4 social-links">
                    <Col>
                      <a href="/">
                        <img src={LinkedIn} width="50px" className="shrink mx-auto d-block"></img>
                      </a>
                    </Col>
                    <Col>
                      <a href="/">
                        <img src={GitHub} width="50px" className="shrink mx-auto d-block"></img>
                      </a>
                    </Col>
                    <Col>
                      <a href="/">
                        <img src={Medium} width="70px" className="shrink mx-auto d-block"></img>
                      </a>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg={7} className="float-right mb-5 mt-5">
                <img src={Lady} alt="Lady and phone" className="w-100 mt-5"/>
              </Col>
            </Row>
          </Container>
          <Container>     
            <Row>
              <h2 className="mt-5 text-center text-md-end">Projects</h2>
            </Row>
             <Row>
              <p className="text-center text-md-end">Some things i've worked on.</p>
             </Row>
          </Container>
         
          <Container className="">
            <Row className="pt-5 mx-auto">
              <Col md={6} xl={3} className="">
                <Project color="white" text="Ruby CLI Game" image={Terminal} header="AirBnB Escape" className="mx-auto" link="https://github.com/hannahgmacca/ruby-escape-game"></Project>
              </Col>
              <Col md={6} xl={3} className="">
                <Project color="white" text="Rails Job Board App" image={Outsource} header="Outsource" className="mx-auto" link="https://github.com/hannahgmacca/rails-outsource"></Project>
                </Col>
              <Col md={6} xl={3} className="mx-auto">
                <Project color="white" text="Javascript + Poke API App" image={Pokemon} header="Pokemon Card" className="mx-auto" link="https://github.com/Ausiarm/PokemonCard"></Project>
              </Col>
              <Col md={6} xl={3} className="mx-auto">
                <Project color="white" text="React + Rails Tutor Search App" image={Tutal} header="Tutal (WIP)" className="mx-auto" link="https://github.com/russ-13/react-tutal"></Project>
              </Col>
             
            </Row>
          </Container>
          <Container className="mt-5">
              <Row><h2 className="mt-5 text-center text-md-start">Skills</h2></Row>
              <Row><p className="mb-5 text-center text-md-start">Some things i've learnt</p></Row>
          </Container>
          <Container className="w-75 skills">
              <Row className="pt-5 rounded-3">
                <Col lg={2} md={4} xs={6} className="mb-4">
                  <img src={HTML} alt="HTML logo" className="w-50 mx-auto d-block mb-3"/>
                 <h3 className="text-center">HTML</h3>
                </Col>
                <Col lg={2} md={4} xs={6} className="mb-4">
                  <img src={CSS} alt="CSS logo" className="w-50 m-auto d-block mb-3"/>
                  <h3 className="text-center">CSS</h3>
                </Col>
                <Col lg={2} md={4} xs={6} className="mb-4">
                  <img src={JS} alt="JS logo" className="w-50 m-auto d-block mb-3"/>
                  <h3 className="text-center">Javascript</h3>
                </Col>
                <Col lg={2} md={4} xs={6} className="mb-4">
                  <img src={Git} alt="Git logo" className="w-50 m-auto d-block mb-3"/>
                  <h3 className="text-center">Git</h3>
                </Col>
                <Col lg={2} md={4} xs={6} className="mb-4">
                  <img src={Rails} alt="Rails logo" className="w-50 m-auto d-block mb-3"/>
                  <h3 className="text-center">Rails</h3>
                </Col>
                <Col lg={2} md={4} xs={6} className="mb-4">
                <img src={ReactImg} alt="React logo" className="w-75 m-auto d-block mb-3"/>
                <h3 className="text-center">React</h3>
                </Col>
              </Row>
          </Container>
          {/* <Container className="mt-5">
              <div className="text-lg-end text-center">
              <h2 className="">Interests</h2>
              <p className="">Some things i like</p>
              </div>
              <Row>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
              </Row>
          </Container> */}
      </div>
    )
  }
}