import React, { useState } from "react";

import Todolist from "./components/Todolist";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todos.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHanlder = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddToDo={todoAddHanlder} />
      <Todolist items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
