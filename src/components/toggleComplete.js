const [todos, setTodos] = useState([]);

function toggleComplete(id) {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
}
