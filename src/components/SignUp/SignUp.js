import {React, useState} from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HeaderHome from "../HeaderHome/HeaderHome";
import './SignUp.css';
import api from "../../Utils/api.js";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Utils/auth";

export default function SignUp() {

  let navigate = useNavigate()

  const [signUp, setSignup] = useState({
    email: "",
    password: ""
  });

  const onSubmit = e => {
    try {
      let x = api.post("/jwt/register/" + signUp.email + "/" + signUp.password);
      auth.login(() => {
        navigate("/dashboard")
      })
    } catch (err) {
      console.log(err);
      alert("Could not register account.")
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
              <Form onSubmit={onSubmit}>
                <Form.Group className="mt-1" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                  value={signUp.email}
                  onChange={e => setSignup({ ...signUp, email: e.target.value })}/>
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