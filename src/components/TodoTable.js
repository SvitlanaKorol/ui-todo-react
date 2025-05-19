import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoTable({ todos, onToggle }) {
  const generateRows = () => {
    let rows = [];
    for (let i = 0; i < todos.length; i++) {
      rows.push(
        <TodoItem key={todos[i].id} todo={todos[i]} onToggle={onToggle} />
      );
    }
    return rows;
  };

  return (
    <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Виконано</th>
          <th>Завдання</th>
        </tr>
      </thead>
      <tbody>
        {generateRows().map((row) => (
          row
        ))}
      </tbody>
    </table>
  );
}

TodoTable.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoTable;