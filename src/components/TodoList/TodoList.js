import React from "react";
import { Button, Col, Container } from 'react-bootstrap';

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
    return (
        <Container className="box">
            <ul className="list-group p-5">
                {todos.map((todo) =>
                    <li className="list-group-item d-flex">
                        <Col style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                            {todo.title}
                        </Col>
                        <div>
                        <input style={{ "margin-right": "30px"}} type="checkbox" checked={todo.completed} onChange={() => onUpdateTodo(todo)}></input>
                        <Button variant="danger" type="button" onClick={() => onDeleteTodo(todo)} >Delete</Button>
                        </div>
                    </li>
                )}
            </ul>

        </Container>


    )
}
export default TodoList;