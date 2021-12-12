import React from "react";
import {Checkbox} from 'react-bootstrap';

const TodoList = ({ todos, onUpdateTodo }) => {
    return (
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

    )
}
export default TodoList;