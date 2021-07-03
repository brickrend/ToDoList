import { useState } from "react";
import Modal from "react-modal";
import storeInstance from "../store/taskStore";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function ToDoForm(props) {
  const [input, setInput] = useState({
    name: "",
    description: "",
  });
  const priorities = ["high", "middle", "low"];

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
    <Modal
      style={{
        overlay: {
          display: "block",
          width: "300px",
          height: "400px",
          position: "absolute",
        },
      }}
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <form onSubmit={handleSubmit} class="row g-3">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Task"
            onChange={handleChange}
          />
          <TiEdit />
        </div>
        <div class="col-md-6">
          <input
            id="standard-basic"
            type="text"
            class="form-control"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          ></input>
        </div>

        <button>submit</button>
      </form>
    </Modal>
  );
}
export default ToDoForm;
