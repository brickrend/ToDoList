// styled components
import { ItemWrapper } from "../styles";
import { observer } from "mobx-react";

const TaskItem = (props) => {
  const handleClick = () => {
    if (props.task.status === true) {
      props.task.status = false;
    } else {
      props.task.status = true;
    }
  };

  const handleDelete = () => {
    props.deleteTask(props.task.id);
  };

  return (
    <ItemWrapper>
      <p>{props.task.name}</p>
      <p>{props.task.description}</p>
      <button onClick={handleClick}>
        {props.task.status ? "pending" : "done"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </ItemWrapper>
  );
};

export default observer(TaskItem);
