import React, { Component } from "react";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

export default class TodoApp extends Component {
  state = {
    // todos: [
    //   {
    //     id: 1,
    //     title: "Wash hands",
    //     complete: false
    //   },
    //   {
    //     id: 2,
    //     title: "Eat breakfast",
    //     complete: true
    //   }
    // ]
    todos: JSON.parse(localStorage.getItem("todos")) || []
  };

  onCreate = title => {
    let { todos } = this.state;

    if (todos.find(todo => todo.title === title)) return;

    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      complete: false
    };

    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  componentDidUpdate = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  onComplete = updateTodo => {
    let { todos } = this.state;

    todos = todos.map(todo =>
      todo === updateTodo
        ? { ...updateTodo, complete: !updateTodo.complete }
        : todo
    );

    this.setState({ todos });
  };

  onDelete = deleteTodo => {
    let { todos } = this.state;

    todos = todos.filter(todo => todo.id !== deleteTodo.id);

    this.setState({ todos });
  };

  onUpdate = (updateTodo, updateTitle) => {
    let { todos } = this.state;

    todos = todos.map(todo => {
      if (todo === updateTodo) {
        return {
          ...todo,
          title: updateTitle
        };
      } else {
        return todo;
      }
    });

    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <CreateTodo onCreate={this.onCreate} />
        <TodoList
          todos={todos}
          handleComplete={this.onComplete}
          handleDelete={this.onDelete}
          handleUpdate={this.onUpdate}
        />
      </div>
    );
  }
}
