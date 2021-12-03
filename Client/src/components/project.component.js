import React, { Component } from 'react';
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';

const ProjectCard = styled.div`
    background: linear-gradient(180deg, #F8C460 50%, white 50%);
    z-index:5;
    border-radius: 20px;
`;

const ProjectImage = styled.img`
    margin: 0 auto;
    display: block;
    max-height: 190px;
`;

const ProjectHeader = styled.h3`
    line-height: 0px
`;

const ProjectText = styled.p`
    font-size: 14px;
    color: #999CA0;
`;

const CardInner = styled.div`
    // position: relative;
    // top: 0px;
    // left: 0px;
`;

const handleClick = (link, e) => {
  window.open(link);
}

export default class Project extends Component {
  render() {
    return (
      
      <ProjectCard color={this.props.color} className="mx-md-auto rise mb-sm-4 mb-3" onClick={(e) => handleClick(this.props.link, e)}>  
     {/* <CardBG></CardBG> */}
        <CardInner className="p-0">
        
            <ProjectImage src={this.props.image} className="mt-2 p-3 pb-0"></ProjectImage>   
            <Container className="pt-3 mt-3">
            <ProjectHeader className="">{this.props.header}</ProjectHeader >
            <ProjectText>{this.props.text}</ProjectText>
            </Container>
        </CardInner>
      </ProjectCard>
    )
  }
}

