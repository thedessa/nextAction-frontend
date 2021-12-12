import axios from 'axios'
import React, { useEffect, useState } from "react"
import { Form } from 'react-bootstrap'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard'
import Loading from "../Loading/Loading"
import TodoList from '../TodoList/TodoList'
import "./Dashboard.css"



const Dashboard = ({ x }) => {
  // const navigate = useNavigate()


  const [todos, setTodos] = useState(null);

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    setTodos(newTodos);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((result) => {
        setTodos(result.data)
      });
  }, []) // [] only fires one time when the component loads

  return (
    <div>
      <HeaderDashboard />

      <div className="box">
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Add to Inbox" />
          </Form.Group>
        </Form>
      </div>


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
