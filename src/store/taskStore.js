//mobx
import axios from "axios";
import { makeAutoObservable } from "mobx";
// data

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
      await axios.post("http://localhost:8000/tasks");
      this.tasks.push(newTask);
    } catch (error) {
      console.error(error);
    }
  };
}
const storeInstance = new taskStore();
storeInstance.getTask();
export default storeInstance;
