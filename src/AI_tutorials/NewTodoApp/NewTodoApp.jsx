import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// Import components
import Todos from "./Todos";
import AddNewTodo from "./AddNewTodo";

/**
 * Represents a todo management application.
 * @component
 */
const NewTodoApp = () => {
  // Initial todos with unique IDs
  const initialTodos = [
    {
      id: uuid(),
      title: "Demo todo one",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores vitae ipsum voluptas?",
    },
    {
      id: uuid(),
      title: "Demo todo two",
      des: "Consectetur adipisicing elit. Dolores vitae ipsum voluptas? Lorem ipsum, dolor sit amet ",
    },
  ];

  // State for todos
  const [todos, setTodos] = useState(initialTodos);

  /**
   * Adds a new todo to the list.
   * @param {Object} newTodo - The new todo to add.
   */
  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  /**
   * Deletes a todo from the list.
   * @param {Object} deletedItem - The todo item to delete.
   */
  const handleDeleteTodo = (deletedItem) => {
    const restTodos = todos.filter((todo) => todo.id !== deletedItem.id);
    setTodos(restTodos);
  };

  return (
    <div id="new-todo-app" className="min-w-[600px]">
      <h1 className="text-3xl font-bold">Your Todos</h1>
      <div className="bg-gray-700 p-8 mt-8 w-full space-y-8">
        {/* Component for adding new todos */}
        <AddNewTodo onAddNewTodo={addNewTodo} />
        {/* Component for displaying the list of todos */}
        <Todos todoList={todos} onDelete={handleDeleteTodo} />
      </div>
    </div>
  );
};

export default NewTodoApp;
