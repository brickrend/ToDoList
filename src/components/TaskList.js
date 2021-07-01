import TaskItem from "./TaskItem";
import tasks from "../data";

const TaskList = () => {
  const taskList = tasks.map((task) => <TaskItem task={task} key={task.id} />);
  return <div>{taskList}</div>;
};

export default TaskList;
