import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Todo from "./Todo";

/**
 * A component that displays a list of todos.
 *
 * @component
 * @param {Object[]} todoList - The list of todos to display.
 * @param {Function} onDelete - A callback function to handle todo deletion.
 * @returns {JSX.Element} The rendered component.
 */
const Todos = ({ todoList, onDelete }) => {
  return (
    <div className="todos-container text-left">
      <ul className="todosList space-y-3">
        {todoList.map((todo) => (
          // Individual Todo component for each todo item
          <Todo key={todo.id} data={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

// Define PropTypes for the component
Todos.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      des: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todos;
