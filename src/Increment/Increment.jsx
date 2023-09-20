import { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="increment">
      <button onClick={() => setCount((a) => a - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount((a) => a + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Increment;
