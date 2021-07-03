//mobx
import axios from "axios";
import { makeAutoObservable } from "mobx";
// data
import tasks from "../data";

class taskStore {
  tasks = tasks;
  constructor() {
    makeAutoObservable(this);
  }

  // getTask = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/tasks");
  //     this.tasks = response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // createTask = async (newTask) => {
  //   try {
  //     await axios.post("http://localhost:8000/tasks");
  //     this.tasks.push(newTask);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  DeleteTask = (tasktId) => {
    const updateTasks = this.tasks.filter((task) => task.id !== tasktId);
    this.tasks = updateTasks;
  };
}
const storeInstance = new taskStore();
// storeInstance.getTask();
export default storeInstance;
