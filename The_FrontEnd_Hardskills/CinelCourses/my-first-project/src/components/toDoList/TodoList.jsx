import { useState, useEffect } from "react";
import "./TodoList.css";

const initialTodos = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  { userId: 2, id: 21, title: "suscipit repellat esse quibusdam voluptatem incidunt", completed: false },
  { userId: 2, id: 22, title: "distinctio vitae autem nihil ut molestias quo", completed: true },
];

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
  });

  const totalPages = Math.ceil(sortedTodos.length / itemsPerPage);
  const paginatedTodos = sortedTodos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4 flex gap-2">
        <button className="px-4 py-2 border rounded" onClick={() => setFilter("all")}>All</button>
        <button className="px-4 py-2 border rounded" onClick={() => setFilter("completed")}>Completed</button>
        <button className="px-4 py-2 border rounded" onClick={() => setFilter("pending")}>Pending</button>
      </div>
      <button className="px-4 py-2 border rounded mb-4" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>Sort {sortOrder === "asc" ? "↓" : "↑"}</button>
      {paginatedTodos.map(todo => (
        <div key={todo.id} className={`p-2 border rounded my-1 flex justify-between items-center ${todo.completed ? 'bg-green-200' : 'bg-red-200'}`}>
          <span>{todo.title}</span>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 border rounded" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="px-4 py-2 border rounded" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
      </div>
      <div className="mt-4">
        <label className="mr-2">Items per page:</label>
        <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}
