import { observer } from "mobx-react";
import storeInstance from "../store/taskStore";
import TaskItem from "./TaskItem";
import { FinishedListWrpper } from "../styles";

const FinishedList = () => {
  const finishedList = storeInstance.tasks.map((task) => {
    if (task.status === false) {
      return (
        <TaskItem
          task={task}
          key={task.id}
          deleteTask={storeInstance.DeleteTask}
        />
      );
    }
  });

  return <FinishedListWrpper>{finishedList}</FinishedListWrpper>;
};

export default observer(FinishedList);
