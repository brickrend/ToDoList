// styled components
import { ItemWrapper } from "../styles";

const TaskItem = (props) => {
  return (
    <ItemWrapper>
      <p>{props.task.name}</p>
      <p>{props.task.description}</p>
    </ItemWrapper>
  );
};

export default TaskItem;
