import React from "react";
import PropTypes from "prop-types";
import { RxCrossCircled } from "react-icons/rx";

/**
 * A component representing a single todo item.
 *
 * @component
 * @param {Object} props - The props for this component.
 * @param {Object} props.data - The todo data including title and description.
 * @param {Function} props.onDelete - A callback function to delete the todo.
 * @returns {JSX.Element} The rendered component.
 */
const Todo = ({ data, onDelete }) => {
  const { title, des } = data;

  return (
    <li className="todo bg-gray-950 py-3 px-5 rounded relative">
      <h5 className="font-bold">{title}</h5>
      <p className="text-sm text-gray-400">{des}</p>
      <button
        className="absolute top-1/4 right-3 text-2xl p-0 text-gray-400 hover:text-red-500 rounded-full hover:outline-none"
        onClick={() => onDelete(data)}
      >
        <RxCrossCircled />
      </button>
    </li>
  );
};

// PropTypes for the component
Todo.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
