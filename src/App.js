import "./App.css";
//components
import TaskList from "./components/TaskList";
import FinishedList from "./components/FinishedList";
import TasksShow from "./components/TasksShow";
// styled components

function App() {
  return (
    <div className="App">
      <div>
        <h1>What's the plan today?</h1>
        <TaskList />
      </div>
      <div>
        <FinishedList />
      </div>
    </div>
  );
}

export default App;
