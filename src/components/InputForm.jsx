import { useState } from "react";

const InputForm = ({ handleInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    handleInput(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onsubmit}>
      <div className="form-body">
        <input
          className="form-control"
          type="text"
          placeholder="Enter your Todo"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </div>
    </form>
  );
};

export default InputForm;
