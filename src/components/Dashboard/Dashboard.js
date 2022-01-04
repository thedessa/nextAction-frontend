import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard';
import Loading from "../Loading/Loading";
import TodoList from '../TodoList/TodoList';
import "./Dashboard.css";
import api from "../../Utils/api";
import { getToken } from "../../Utils/auth";



const Dashboard = ({ x }) => {
  // const navigate = useNavigate()
  const [input, setInput] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    let newTask = {
      "userId": 1, // get current user
      "id": uuid(),
      "title": input,
      "completed": false
    }

    // beginning of array - keeping as an example
    //setTodos(todos => [newTask, ...todos])

    setTodos([...todos, newTask])
    setInput();
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  const [todos, setTodos] = useState(null);

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id === todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    setTodos(newTodos);
  };

  useEffect(() => {
    //const token = localStorage.getItem("@nextAction-Token");
    const token = getToken();
    api.get("/jwt/list", {headers: {'Authorization': `Bearer ${token}` }})
      .then((result) => {
        setTodos(result.data.slice(0, 5))
      });
  }, []) // [] only fires one time when the component loads

  return (
    <div>
      <HeaderDashboard />

      <Container className="box p-2">
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col xs="10">
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Add to Inbox"
                value={input}
                onChange={handleChange}

              />
            </Col>

            <Col xs="auto">
              <Button type="submit" className="mb-2" disabled={!input}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>


      {todos ? <TodoList todos={todos} onUpdateTodo={onUpdateTodo} /> : <Loading />}




      {/* <p>This will be the private page of the user.</p>
      <button
        onClick={() => {
          fakeAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/dashboard" } } })
          )
        }}
      >
       Logout
      </button> */}
    </div>
  )
}

export default Dashboard
