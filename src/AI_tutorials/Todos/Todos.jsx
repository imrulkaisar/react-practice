import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todoList }) => {
  return (
    <div className="todos">
      <ul className="todosList mt-5 list-decimal list-inside">
        {todoList.reverse().map((todo, index) => (
          <Todo key={index} data={todo} />
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default Todos;
