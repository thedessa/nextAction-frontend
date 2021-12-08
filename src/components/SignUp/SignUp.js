import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HeaderHome from "../HeaderHome/HeaderHome";
import './SignUp.css';

export default function SignUp() {
  return (
    <div>
      <HeaderHome />
      <div>
        <Container>
          <h1 className="login-text mt-10 p-3 text-center">Register to Next Action</h1>
          <Row className="mt-1">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form>
                <Form.Group className="mt-1" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mt-1" controlId="formBasicEmail">
                  <Form.Label>Confirm your email address</Form.Label>
                  <Form.Control type="email" placeholder="Confirm email" />
                </Form.Group>

                <Form.Group className="mt-1" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br />

                <Button variant="light w-100" size="lg" type="submit">
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}