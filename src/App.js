import React, {Component} from 'react';
import List from './list';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTodo: '',
      todos: []
    };
  };

  handleChange = (event) => {
    this.setState({currentTodo: event.target.value})
  };


  addItem = (event) => {
    event.preventDefault();
    console.log("addItem method fired")
    
    this.setState({
      currentTodo: '',
      todos: [...this.state.todos, this.state.currentTodo]
  });
}

  render() {

    return ( 
      <div>
        <form onSubmit={this.addItem}>
          <input name="taskName" type="text" value={this.state.currentTodo} onChange={this.handleChange}/>
          <button type="Submut">Add Task</button>
        </form>
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default Todo;