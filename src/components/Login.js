import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import './Login.css'

export default function Home() {
  return (
    <div>
      <Container>
        <h1 className="login-text shadow-sm mt-5 p-3 text-center rounded"> Login </h1>
        <Row classNmae="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm roudend-lg">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="success w-100" type="submit">
                Submit
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    </div>
  );
}