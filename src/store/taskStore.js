//mobx
import axios from "axios";
import { makeAutoObservable } from "mobx";
// data
// import tasks from "../data";

class taskStore {
  tasks = [];
  constructor() {
    makeAutoObservable(this);
  }
  getTask = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      this.tasks = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  createTask = async (newTask) => {
    try {
      const response = await axios.post("http://localhost:8000/tasks", newTask);
      this.tasks.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      const updateTasks = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = updateTasks;
    } catch (error) {
      console.log(error);
    }
  };
}
const storeInstance = new taskStore();
storeInstance.getTask();
export default storeInstance;
