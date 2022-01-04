import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import api from "../../Utils/api";
import { getToken } from "../../Utils/auth";
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard';
import Loading from "../Loading/Loading";
import TodoList from '../TodoList/TodoList';
import "./Dashboard.css";



const Dashboard = ({ x }) => {

  const token = getToken();
  // const navigate = useNavigate()
  const [input, setInput] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    let newTask = {
      "title": input,
      "completed": false
    }

    // beginning of array - keeping as an example
    //setTodos(todos => [newTask, ...todos])

    setTodos([...todos, newTask])
    setInput();
    api.post("/jwt/add/1/" + newTask.title, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((result) => {
        console.log(result);
      });
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  const [todos, setTodos] = useState(null);

  const onUpdateTodo = async (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.taskId === todo.taskId);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;

    await fetch("http://127.0.0.1:8080/jwt/complete/" + newTodo.taskId, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    })

    setTodos(newTodos);
  };

  const handleCreate = async event => {
    //prevent form from refreshing screen
    event.preventDefault();

    let newTask = {
      "userId": 1, // get current user
      "id": uuid(),
      "title": input,
      "completed": false
    };

    await fetch("http://127.0.0.1:8080/jwt/add/1/" + newTask.title, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    })

    //update the list of todos be refetching the list
    await getTodos();
    setTodos([...todos, newTask])
    setInput();

  }

  // useEffect(() => {
  //   //const token = localStorage.getItem("@nextAction-Token");
  //   // const token = getToken();
  //   api.get("/jwt/list", {headers: {'Authorization': `Bearer ${token}` }})
  //     .then((result) => {
  //       setTodos(result.data.slice(0, 5))
  //     });
  // }, []) // [] only fires one time when the component loads

  //Our function to grab the latest list of todos
  const getTodos = async () => {
    api.get("/jwt/list", { headers: { 'Authorization': `Bearer ${token}` } })
      .then((result) => {
        setTodos(result.data.slice(0, 5))
      });
  }

  /////////////////////////
  // useEffects
  /////////////////////////
  //useEffect to initially grab todos when page loads
  React.useEffect(() => {
    getTodos()
  }, [])

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
