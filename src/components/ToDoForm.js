import { useState } from "react";
import Modal from "react-modal";
import storeInstance from "../store/taskStore";

function ToDoForm(props) {
  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  // const handleChange = (event) => {
  //   setInput(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // props.onSubmit({
  //   //   text: input,
  //   setInput("");
  // };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storeInstance.createTask(input);
    props.closeModal();
    // create the product function
  };
  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder="Add a To-do"
    //     value={input}
    //     name="text"
    //     onChange={handleChange}
    //   />
    //   <button>Add to-do</button>
    // </form>
    <Modal isOpen={props.isOpen} closeModal={props.closeModal}>
      <form onSubmit={handleSubmit} class="row g-3">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          ></input>
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            name="description"
            placeholder="text"
            onChange={handleChange}
          ></input>
        </div>
        <button>submit</button>
        {/* <AddBtnStyled type="submit">
        {props.oldProduct ? "Update" : "Add"}
      </AddBtnStyled> */}
      </form>
    </Modal>
  );
}
export default ToDoForm;
