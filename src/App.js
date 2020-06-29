import React, {Component} from 'react';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDO: '',
    };
  };

  handleChange = (event) => {
    console.log(event.target.value)
  };


  addItem = (event) => {
    console.log(event.target.value)
  };

  

  render() {


    return ( 
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">
            Task Name: 
          </label>
          <input name="taskName" type="text" placeholder="Add to Todo List here" onChange={this.handleChange}/>
          <button type="Submut">Add Task</button>
        </form>
      </div>
    )
  }
}

export default Todo;