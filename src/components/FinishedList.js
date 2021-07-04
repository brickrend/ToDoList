import { observer } from "mobx-react";
import storeInstance from "../store/taskStore";
import TaskItem from "./TaskItem";
import { FinishedListWrpper } from "../styles";

const FinishedList = () => {
  const filterTrue = storeInstance.tasks.filter((task) => {
    return task.status === true;
  });

  const finishedList = filterTrue.map((task) => {
    return (
      <TaskItem
        task={task}
        key={task.id}
        deleteTask={storeInstance.deleteTask}
      />
    );
  });

  return <FinishedListWrpper>{finishedList}</FinishedListWrpper>;
};

export default observer(FinishedList);
