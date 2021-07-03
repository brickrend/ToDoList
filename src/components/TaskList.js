// components
import TaskItem from "./TaskItem";
// store component
import storeInstance from "../store/taskStore";
// useState
import { useState } from "react";
// Modal
import ToDoForm from "./ToDoForm";
//mobx
import { observer } from "mobx-react";
// styled components
import { ListWrpper } from "../styles";

const TaskList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const taskList = storeInstance.tasks
    .filter((task) => task.status === false)
    .map((task) => {
      return (
        <TaskItem
          task={task}
          key={task.id}
          deleteTask={storeInstance.DeleteTask}
        />
      );
    });

  return (
    <ListWrpper>
      <button onClick={openModal}>Add</button>
      <ToDoForm isOpen={isOpen} closeModal={closeModal} />
      {taskList}
    </ListWrpper>
  );
};

export default observer(TaskList);
