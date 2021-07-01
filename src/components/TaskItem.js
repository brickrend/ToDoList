import tasks from "../data";
// styled components
import { ItemWrapper } from "../styles";

const TaskItem = (props) => {
  return (
    <ItemWrapper>
      <p>{props.task.name}</p>
      <p>{props.task.discription}</p>
    </ItemWrapper>
  );
};

export default TaskItem;
