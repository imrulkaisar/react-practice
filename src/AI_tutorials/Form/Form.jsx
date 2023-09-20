import React, { useState } from "react";

const Form = () => {
  // Define initial user input state
  const initialUserInput = {
    username: "",
    email: "",
    password: "",
  };

  // Initialize state using the useState hook
  const [userInput, setUserInput] = useState(initialUserInput);

  // Handle input field changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted User Input:", userInput);
    // Add further logic for form submission (e.g., sending data to a server)
  };

  return (
    <div className="form border-2 border-gray-500 p-5 rounded-lg">
      <h4 className="font-bold uppercase mb-5">Register yourself</h4>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username{" "}
          <input
            onChange={handleChange}
            name="username"
            type="text"
            value={userInput.username}
          />
        </label>
        <label htmlFor="email">
          Email{" "}
          <input
            onChange={handleChange}
            name="email"
            type="email"
            value={userInput.email}
          />
        </label>
        <label htmlFor="password">
          Password{" "}
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={userInput.password}
          />
        </label>
        <button className="border-[1px] border-gray-400" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
