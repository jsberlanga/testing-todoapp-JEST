import React from "react";
import { Switch, Route } from "react-router";
import TodoApp from "./TodoApp";
import CreateTodo from "./CreateTodo";
import Login from "./Login";
import Hooks from "./Hooks";
import Navbar from "./Navbar";

const App = ({ title }) => {
  return (
    <div className="app">
      <Navbar title={title} />
      <Switch>
        <Route exact path="/" component={TodoApp} />
        <Route exact path="/create" component={CreateTodo} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/hooks" component={Hooks} />
      </Switch>
    </div>
  );
};

export default App;
