function App() {
    
    const [todos, setTodos] = useState(todosJSON);
    const [todoTitle, setTodoTitle] = useState("");
  
    const newId = () => {
      let highestTodo = 0;
      todos.forEach(todo => {
        if (todo.id > highestTodo) {
          highestTodo = todo.id;
        }
      });
      return highestTodo + 1;
    };
  
    const handleChange = (e) => {
      setTodoTitle(e.target.value);
    };
  
    const toggleTodo = (id) => {
      const todosCopy = [...todos];
      todosCopy.forEach(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
      setTodos(todosCopy);
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const novoTodo = {
        userId: 1,
        id: newId(),
        title: todoTitle,
        completed: false,
      };
      setTodoTitle("");
      setTodos([...todos, novoTodo]);
    };
  
    const completedTodosCount = todos.filter(todo => todo.completed).length;
  
    return (
      <div className='App'>
        <h2>Todos Completos: {completedTodosCount}</h2>
        {todos.map(todo => (
          <div key={todo.id}>
            <Todo todo={todo} toggleTodo={toggleTodo} />
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={todoTitle} />
          <button>Adicionar Todo</button>
        </form>
      </div>
    );
  }
  
  export default App;