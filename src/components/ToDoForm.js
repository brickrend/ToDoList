import { useState } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // props.onSubmit({
    //   text: input,
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a To-do"
        value={input}
        name="text"
        onChange={handleChange}
      />
      <button>Add to-do</button>
    </form>
  );
}
export default ToDoForm;
