import { React, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { api } from "../../Utils/api.js";
import { login as authLogin } from "../../Utils/auth";
import HeaderHome from "../HeaderHome/HeaderHome";
import './Login.css';

function Login() {
  let navigate = useNavigate()

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const onLogin = e => {
    try {
      let x = api.get("/secured/login/" + login.email + "/" + login.password);
      x.then((result) => authLogin(result.data));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Could not login.")
    }
  };

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
                  <Form.Control type="email" placeholder="Enter email"
                    value={login.email}
                    onChange={e => setLogin({ ...login, email: e.target.value })} />
                </Form.Group>

                <Form.Group className="mt-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"
                    value={login.password}
                    onChange={e => setLogin({ ...login, password: e.target.value })} />
                </Form.Group>
                <br />

                <Button variant="light w-100" size="lg" type="submit" onClick={onLogin}>
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
