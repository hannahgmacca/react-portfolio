import {Col, Container, Row} from 'react-bootstrap';
import BackgroundSVG1 from "../images/ellipse1.svg";
import BackgroundSVG2 from "../images/ellipse2.svg";
import BackgroundSVG3 from "../images/ellipse3.svg";
import BackgroundSVG4 from "../images/ellipse4.svg";
import BackgroundSVG5 from "../images/ellipse5.svg";

function BackgroundSVGs() {
    return(
      <Container className="m-0 p-0">
        <Row>
            <Col lg={2} className="w-lg-50">
                <img src={BackgroundSVG1} id="svg1" alt="pink background shape" className="bgSVG"/>
            </Col>
            <Col lg={2} className="w-lg-50">
                <img src={BackgroundSVG2} id="svg2" alt="pink background shape" className="bgSVG"/>
            </Col>
            <Col lg={2} className="w-lg-50">
                <img src={BackgroundSVG3} id="svg3" alt="pink background shape" className="bgSVG toHide"/>
            </Col>
            <Col lg={2} className="w-lg-50">
                <img src={BackgroundSVG4} id="svg4" alt="pink background shape" className="bgSVG toHide"/>
            </Col>
            <Col lg={2} className="w-lg-50">
                <img src={BackgroundSVG5} id="svg5" alt="pink background shape" className="bgSVG toHide"/>
            </Col>  
        </Row>
      </Container>
    )
}

export default BackgroundSVGs;