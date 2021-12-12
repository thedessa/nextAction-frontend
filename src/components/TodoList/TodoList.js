import React from "react";
import { Row } from 'react-bootstrap';

const TodoList = ({ todos, onUpdateTodo }) => {
    return (
        <Row>
            <div className="box">
                <ul className="list-group">
                    {todos.map((todo) =>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {todo.title}
                            <input type="checkbox" checked={todo.completed} onChange={() => onUpdateTodo(todo)}></input>
                        </li>
                    )}
                </ul>
            </div>
        </Row>


    )
}
export default TodoList;