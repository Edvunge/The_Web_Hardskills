import './App.css';
import { useState } from 'react';
import todosJSON from './assets/todos.json'
import Todo from './components/Todo';

function App() {

  // Inicializar Variáveis
  const [todos, setTodos] = useState(todosJSON);
  const [todoTitle, setTodoTitle] = useState("");

  // Código para gerar novo ID com base no ID mais alto que já existe (somado de 1)
  const newId = () => {
    let highestTodo = 0;
    todos.forEach(todo => {
      if (todo.id > highestTodo) {
        highestTodo = todo.id;
      }
    });
    return highestTodo + 1;
  };

  // Ao alterar o input, atualizar a variável state
  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  // Toggle Todo - Ao clicar num todo, trocar o "completed"
  const toggleTodo = (id) => {

    // 1. Criar uma cópia da nossa variável
    const todosCopy = [...todos];

    // 2. Encontrar o todo com o id selecionado (na cópia)
      todosCopy.forEach(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });

    // 3. Atualizar a variável "todos" com a cópia *alterada*
      setTodos(todosCopy);
    };


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Novo Todo - Ao clicar no botão de submissão, colocar um novo Todo com info do utilizador
  const handleSubmit = (e) => {
    e.preventDefault();
    const novoTodo = {
      userId: 1,
      id: newId(),
      title: todoTitle,
      completed: false,
    };
    

    // Resetar o input após submissão
    setTodoTitle("");

    // Criar cópia do array com um novo todo e seta-o
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

// MEGA TASK 1 - Eliminar um todo (cada todo deve ter um botão para se autodestruir)
// MEGA TASK 2 - Mostrar quantos todos estão completos
