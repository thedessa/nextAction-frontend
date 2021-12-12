import React from "react";
import { Container } from 'react-bootstrap';

const TodoList = ({ todos, onUpdateTodo }) => {
    return (
        <Container className="box">
            <ul className="list-group p-5">
                {todos.map((todo) =>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {todo.title}
                        <input type="checkbox" checked={todo.completed} onChange={() => onUpdateTodo(todo)}></input>
                    </li>
                )}
            </ul>

        </Container>


    )
}
export default TodoList;