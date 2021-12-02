import React, { Component } from 'react';
import Timeline from './timeline.component'
import {Col, Container, Row} from 'react-bootstrap';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Container className="mb-5">
        
        <h2>Projects and Experience</h2>
        <h4>Some things i've worked on</h4>
        
        </Container>
        <Container>
          <Row className="mt-5 mb-5"></Row>
        </Container>
        <Timeline className="mt-5"></Timeline>
      </div>
    )
  }
}