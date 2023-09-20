import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const TodoApp = () => {
  const dammyTodos = [
    {
      title: "Todo one",
    },
    {
      title: "Todo two",
    },
  ];

  const [todos, setTodos] = useState(dammyTodos);

  const getNewTodo = (todoData) => {
    setTodos([...todos, todoData]);
  };

  return (
    <div id="todo-app-container" className="text-left">
      <NewTodo onAddTodo={getNewTodo} />
      <Todos todoList={todos} />
    </div>
  );
};

export default TodoApp;
