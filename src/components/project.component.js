import React, { Component } from 'react';
import styled from 'styled-components'
import {Col, Container, Row} from 'react-bootstrap';

const ProjectCard = styled.div`
    background-color:  ${props => props.color || "palevioletred"};
    min-height: 300px;
    min-width: 300px;
    z-index:5;
    position: relative;
    border-radius: 20px;
    margin: 25px;
 

`;

const ProjectImage = styled.img`
    width: 100%;
    margin: 0 auto;
    display: block;
    max-height: 190px;
    min-height: 190px;
`;

const ProjectHeader = styled.h3`
    line-height: 0px
`;

const ProjectText = styled.p`
    font-size: 14px;
    color: #999CA0;
`

export default class Project extends Component {
  render() {
    return (
      <div className="project-wrapper">
      <ProjectCard color={this.props.color} className="mx-lg-auto">
        <div className="project">
        <Container className="p-0">
            <ProjectImage src={this.props.image} className="mt-2 p-3 pb-0"></ProjectImage>   
            <Container className="pt-3 mt-3">
            <ProjectHeader className="">Project Header</ProjectHeader >
            <ProjectText>{this.props.text}</ProjectText>
            </Container>
        </Container>
        </div>
      </ProjectCard>
      </div>
    )
  }
}

