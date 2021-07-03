import { ItemWrapper, todoButton } from "../styles";
import { observer } from "mobx-react";
import storeInstance from "../store/taskStore";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const TaskItem = (props) => {
  // const [finished, setFinished] = useState(false);
  // const handleClick = () => {
  //   setFinished((prevState) => !prevState);
  const handleClick = () => {
    if (props.task.status === true) {
      props.task.status = false;
    } else {
      props.task.status = true;
    }
  };

  const handleDelete = () => {
    storeInstance.deleteTask(props.task.id);
  };

  return (
    <ItemWrapper>
      <p>{props.task.name}</p>
      <p>{props.task.description}</p>
      <todoButton>
        <button onClick={handleClick}>
          {props.task.status ? "Unfinished" : "Finished"}
        </button>
      </todoButton>
      <button onClick={handleDelete}>Delete</button>
      <RiCloseCircleLine />
    </ItemWrapper>
  );
};

export default observer(TaskItem);
