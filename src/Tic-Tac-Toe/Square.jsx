import React, { useState } from "react";

function Square({key, value, onSquareClick}) {
  return (
    <button key={key} className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
