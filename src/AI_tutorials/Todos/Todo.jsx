import React from "react";

const Todo = ({ data }) => {
  const { title } = data;

  return (
    <li className="Todo">
      <h5 className="inline">{title}</h5>
    </li>
  );
};

export default Todo;
