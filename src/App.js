import "./App.css";
//components
import TaskList from "./components/TaskList";
import FinishedList from "./components/FinishedList";
// styled components

function App() {
  return (
    <div className="App">
      <div>
        <TaskList />
      </div>
      <div>
        <FinishedList />
      </div>
    </div>
  );
}

export default App;
