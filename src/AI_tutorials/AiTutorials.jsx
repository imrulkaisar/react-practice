import React, { useState } from "react";
import Form from "./Form/Form";
import Child from "./Child";
import TodoApp from "./Todos";
import NewTodoApp from "./NewTodoApp/NewTodoApp";

const AiTutorials = () => {
  const [childData, setChildData] = useState("");

  const accessChildData = (data) => {
    setChildData(data);
  };

  return (
    <>
      <NewTodoApp />
    </>
  );
};

export default AiTutorials;
