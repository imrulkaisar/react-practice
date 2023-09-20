import React from "react";

const Child = ({ childData }) => {
  const data = "Another data sending from child.";
  childData(data);

  return (
    <div>
      <h2>This is child text.</h2>
    </div>
  );
};

export default Child;
