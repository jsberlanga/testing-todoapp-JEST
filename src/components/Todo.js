import React, { useState } from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, handleComplete, handleDelete, handleUpdate }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const onUpdate = ({ title }) => {
    setIsEdit(true);
    setTitle(title);
  };

  return (
    <div className="todo">
      {isEdit && (
        <div className="todo--option">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => {
              handleUpdate(todo, title);
              setIsEdit(false);
            }}
          >
            Update
          </button>
        </div>
      )}
      {!isEdit && (
        <div className="todo--option">
          <button data-test="edit-todo" onClick={() => onUpdate(todo)}>
            edit
          </button>
          <p
            data-test="complete-todo"
            onClick={() => handleComplete(todo)}
            className={todo.complete ? "todo__complete" : ""}
          >
            {todo.title}
          </p>
          <button data-test="delete-todo" onClick={() => handleDelete(todo)}>
            x
          </button>
        </div>
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }).isRequired
};

export default Todo;
