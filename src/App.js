import React, { useState, useEffect } from "react";
import TodoTable from "./components/TodoTable";

const unusedData = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  title: `not ${i}`,
  meta: { detail: `some ${Math.random()}` },
}));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((res) => res.json())
        .then((data) => {
          setTodos(data);
          JSON.stringify(unusedData);
        })
        .catch(() => {}) 
        .finally(() => setLoading(false));
    }
  }, [started]);

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ padding: "24px", fontSize: "18px", background: "#f8f8f8" }}>
      <h1>TODO (TypeScript</h1>

      {!started && (
        <button
          onClick={() => setStarted(true)}
          disabled={loading}
          style={{ padding: "10px 16px", fontSize: "16px" }}
        >
          {loading ? "Завантаження..." : "Старт"}
        </button>
      )}

      {started && todos.length > 0 && (
        <TodoTable todos={todos} onToggle={toggleTodo} />
      )}
    </div>
  );
}

export default App;
