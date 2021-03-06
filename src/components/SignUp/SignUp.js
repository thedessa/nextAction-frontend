import { React, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../Utils/api.js";
import { login as authLogin } from "../../Utils/auth";
import HeaderHome from "../HeaderHome/HeaderHome";
import './SignUp.css';

export default function SignUp() {

  let navigate = useNavigate()

  const [signUp, setSignup] = useState({
    email: "",
    password: ""
  });

  const onSignup = e => {
    try {
      let x = api.post("/secured/register/" + signUp.email + "/" + signUp.password);
      x.then((result) => authLogin(result.data));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Could not register.")
    }
  };

  return (
    <div>
      <HeaderHome />
      <div>
        <Container>
          <h1 className="login-text mt-10 p-3 text-center">Register to Next Action</h1>
          <Row className="mt-1">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form onSubmit={onSignup}>
                <Form.Group className="mt-1" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                    value={signUp.email}
                    onChange={e => setSignup({ ...signUp, email: e.target.value })} />
                </Form.Group>

                <Form.Group className="mt-1" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"
                    value={signUp.password}
                    onChange={e => setSignup({ ...signUp, password: e.target.value })} />
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