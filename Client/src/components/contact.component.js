import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Selfie from "../images/me.jpeg";


function hideSvgsOnContact() {
  if ( window.location.href.includes("contact") ) {
    var elements = document.getElementsByClassName("toHide");
    for (let svg of elements) {
      var newClass = svg.getAttribute("class");
      newClass += " hidden"; 
      svg.setAttribute("class", newClass)
    }
    console.log(elements)
}
}

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  useEffect(() => {
    hideSvgsOnContact();
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://hgmportfolio.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Card className="mx-auto p-lg-5 w-100 mt-5">
      <Container className="p-3 mt-4 contact-form"> 
        <Row>
          <Col className="">
            <h2>Get in touch</h2>
            <Form onSubmit={handleSubmit} className="">
              <Form.Group className="">
                <p>Email enquiries:</p>
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control type="text" id="name" required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control type="email" id="email" required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control id="message" required />
              </Form.Group>
              <Button type="submit" className="mt-2">{status}</Button>
            </Form>
          </Col>
          <Col className="d-flex align-content-center">
          <img src={Selfie} alt="selfie of me" width="250px" height="270px" className="mt-5 rounded-circle d-block mx-auto"></img>
          </Col>
        </Row>
      </Container>
     </Card>
  );
};

export default ContactForm;