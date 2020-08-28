import React from "react";
import "./TodoList.css";

interface TodolistProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const Todolist: React.FC<TodolistProps> = (props) => {
  return (
    <ul className="elements">
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>
            {todo.text}
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              DELETE
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
