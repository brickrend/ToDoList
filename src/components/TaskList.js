import TaskItem from "./TaskItem";
import storeInstance from "../store/taskStore";
import { useState } from "react";
import ToDoForm from "./ToDoForm";
import { observer } from "mobx-react";
import { AddButton } from "../styles";

const TaskList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const filterFalse = storeInstance.tasks.filter((task) => {
    return task.status === false;
  });

  const taskList = filterFalse.map((task) => {
    return <TaskItem task={task} key={task.id} />;
  });

  return (
    <div>
      <AddButton>
        <button onClick={openModal}>Add</button>
        <ToDoForm isOpen={isOpen} closeModal={closeModal} />
      </AddButton>
      {taskList}
    </div>
  );
};

export default observer(TaskList);
