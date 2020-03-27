import React, { Component } from "react";

class TodoItem extends Component {


  inputValue = React.createRef();

  render() {
    let { addToDo, names, deletePerson } = this.props;

    return (
      <div>
        <input
          ref={this.inputValue}
          type="text"
          placeholder="Add Todo"
          />
        <button onClick={() => addToDo(this.inputValue.current.value)}>
          Add
        </button>
        <ul>
          {names.map(li=> {
            return (
              <li key={li.id}>
                {li.name}
                <button
                  onClick={() => deletePerson(li.id)}
                  style={{ marginLeft: "10px" }}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoItem;
