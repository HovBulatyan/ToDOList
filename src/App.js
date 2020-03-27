import React, { Component } from "react";
import "./App.css";
import TodoItem from "./TodoItem/TodoItem";

class App extends Component {
  state = {
    names: [
      { name: "Hovo", id: 1 },
      { name: "Mrdo", id: 2 },
      { name: "Aghas", id: 3 },
      { name: "Vahag", id: 4 },
      { name: "Edo", id: 5 },
      { name: "Karen", id: 6 }
    ],
    checkInput: false
  };

  addToDo = newName => {
    if (newName === "") {
      this.setState({
        checkInput: true
      });
      return null;
    }
    let newPerson = { name: newName, id: Math.random() + 1 };
    this.setState({
      names: [...this.state.names, newPerson]
    });
  };

  deletePerson = id => {
    let filterTodoList = this.state.names.filter(todos => todos.id !== id);
    this.setState({
      names: filterTodoList
    });
  };

  render() {
    return (
      <div className="App">
        <h3>Todo List</h3>
        {this.state.checkInput && (
          <code style={{ color: "red" }}>Name is empaty add name</code>
        )}
        <TodoItem
          addToDo={this.addToDo}
          names={this.state.names}
          deletePerson={this.deletePerson}
        />
      </div>
    );
  }
}
export default App;
