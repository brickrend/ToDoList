import TaskItem from "./TaskItem";
import storeInstance from "../store/taskStore";
import { useState } from "react";
import ToDoForm from "./ToDoForm";
import { observer } from "mobx-react";

const TaskList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const taskList = storeInstance.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));
  return (
    <div>
      <button onClick={openModal}>Add</button>
      <ToDoForm isOpen={isOpen} closeModal={closeModal} />
      {taskList}
    </div>
  );
};

export default observer(TaskList);
