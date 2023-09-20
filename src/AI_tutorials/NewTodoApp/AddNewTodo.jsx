import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

/**
 * A component for adding new todos.
 *
 * @component
 * @param {Object} props - The props for this component.
 * @param {Function} props.onAddNewTodo - A callback function to add a new todo.
 * @returns {JSX.Element} The rendered component.
 */
const AddNewTodo = ({ onAddNewTodo }) => {
  // Initial values for a new todo
  const initialValue = {
    id: uuid(),
    title: "",
    des: "",
  };

  // State to manage the new todo
  const [newTodo, setNewTodo] = useState(initialValue);

  /**
   * Handles changes in input values.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event.
   */
  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  /**
   * Handles form submission.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNewTodo(newTodo);

    // Reset the form values and generate a new ID
    setNewTodo({ ...newTodo, id: uuid(), title: "", des: "" });
  };

  return (
    <form
      id="add-new-todo"
      className="p-4 bg-gray-900 space-y-2 text-left"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Todo title..."
        value={newTodo.title}
        className="px-4 py-2 w-full"
        onChange={handleValueChange}
      />
      <textarea
        name="des"
        id="des"
        rows="2"
        placeholder="Todo Description"
        value={newTodo.des}
        className="px-4 py-2 w-full"
        onChange={handleValueChange}
      ></textarea>
      <button className="bg-cyan-600 hover:bg-cyan-800">Add new todo</button>
    </form>
  );
};

// PropTypes for the component
AddNewTodo.propTypes = {
  onAddNewTodo: PropTypes.func.isRequired,
};

export default AddNewTodo;
