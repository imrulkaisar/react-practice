import React, { useState } from "react";

const NewTodo = ({ onAddTodo }) => {
  const initialValue = {
    title: "",
  };
  const [newTodo, setNewTodo] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    onAddTodo(newTodo);
    setNewTodo({ ...newTodo, title: "" });
  };

  return (
    <form className="" id="new-todo" onSubmit={handleTodoSubmit}>
      <label htmlFor="title">
        <input
          className="py-3 px-4 focus:outline-none"
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          placeholder="Todo Title"
          value={newTodo.title}
        />
      </label>
      <button className="bg-cyan-500 rounded-none" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewTodo;
