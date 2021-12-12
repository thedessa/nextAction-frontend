import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fakeAuth } from "../../Utils/fakeAuth";
import HeaderHome from "../HeaderHome/HeaderHome";
import './Login.css';

function Login() {
  let navigate = useNavigate()

  //let { from } = location.state || { from: { pathname: "/" } }
  let login = () => {
    fakeAuth.login(() => {
      navigate("/dashboard")
    })
  }

  return (
    <div>
      <div>
        <HeaderHome />
        <Container>
          <h1 className="login-text mt-10 p-3 text-center">Login to Next Action</h1>
          <Row className="mt-1">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form>
                <Form.Group className="mt-1" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mt-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br />

                <Button variant="light w-100" size="lg" type="submit" onClick={login}>
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>


      </div>
    </div>
  )
}

export default Login
