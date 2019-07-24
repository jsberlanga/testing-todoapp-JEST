import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleComplete, handleDelete, handleUpdate }) => {
  return (
    <>
      {todos.length === 0 ? (
        <p>no items</p>
      ) : (
        todos.map(todo => (
          <Todo
            todo={todo}
            key={todo.id}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))
      )}
    </>
  );
};

export default TodoList;
