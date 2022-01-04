import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import api from "../../Utils/api";
import { getToken } from "../../Utils/auth";
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard';
import Loading from "../Loading/Loading";
import TodoList from '../TodoList/TodoList';
import "./Dashboard.css";

const Dashboard = () => {
  const token = getToken();

  const [input, setInput] = useState();
  const [todos, setTodos] = useState(null);

  const handleChange = e => {
    setInput(e.target.value);
  }

  const onUpdateTodo = async (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.taskId === todo.taskId);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;

    await fetch("http://127.0.0.1:8080/secured/complete/" + newTodo.taskId, {
      method: "post",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    setTodos(newTodos);
  };

  const handleCreate = async event => {
    event.preventDefault();

    let newTask = {
      "title": input
    };

    // Directly using request because of trouble using api :/
    await fetch("http://127.0.0.1:8080/secured/add/1/" + newTask.title, {
      method: "post",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    await getTodos();
    setTodos([...todos, newTask])
    setInput("");
  }

  const getTodos = async () => {
    api.get("/secured/list", { headers: { 'Authorization': `Bearer ${token}` } })
      .then((result) => {
        setTodos(result.data)
      });
  }

  React.useEffect(() => {
    getTodos()
  }, []) // [] only fires one time when the component loads

  return (
    <div>
      <HeaderDashboard />

      <Container className="box p-2">
        <Form onSubmit={handleCreate}>
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
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {todos ? <TodoList todos={todos} onUpdateTodo={onUpdateTodo} /> : <Loading />}
    </div>
  )
}

export default Dashboard
