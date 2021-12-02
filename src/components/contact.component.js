import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkedIn from "../images/linkedin.png";
import Medium from "../images/medium.png";
import GitHub from "../images/github.png";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
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
    <Container>
    <Card className="w-75 mx-auto p-5">
    <h2>Contact</h2>
    <Form onSubmit={handleSubmit} className="w-75 mx-auto">
      <Form.Group>
        <p>Email enquiry</p>
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
      <Container classname="">
        <Row className="mt-4 w-50 mx-auto">
          <Col>
            <a href="https://www.linkedin.com/in/hannahmcdonald42/">
              <img src={LinkedIn} width="50px" className="shrink"></img>
            </a>
          </Col>
          <Col>
            <a href="/">
              <img src={GitHub} width="50px" className="shrink"></img>
            </a>
          </Col>
          <Col>
            <a href="/">
              <img src={Medium} width="70px" className="shrink"></img>
            </a>
          </Col>
        </Row>
      </Container>
    </Card>
    </Container>
  );
};

export default ContactForm;