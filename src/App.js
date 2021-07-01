import "./App.css";
import TaskList from "./components/TaskList";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <div className="App">
      {/* <TaskList /> */}
      <ToDoList />
    </div>
  );
}

export default App;
