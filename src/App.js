import React from 'react';
import TodoList from './components/TodoList';

const toDo = [
  {
    task:"",
    id:"",
    completed:false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      toDo
    };
  }

  addItem = (e,item)=>{
    console.log('item added');
    console.log(this.state);
    e.preventDefault();
    const newItem = {
      task:item,
      id:Date.now(),
      completed:false
    };
    this.setState({
      toDo:[...this.state.toDo, newItem]
    })
  }

  clearCompleted = e =>{
    console.log(e.target.value)
    e.preventDefault();
    this.setState({
      toDo:this.state.toDo.filter(item => !item.completed)
    });
  }

  toggleTask = taskId =>{
    console.log('task is toggled')
    console.log(this.state.toDo.map(item=>{return(item.completed)}))
    this.setState({
      toDo: this.state.toDo.map(task=>{
        return(taskId === task.id ? {...task,completed:!task.completed} : task);
      })
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList addItem = {this.addItem} clearCompleted = {this.clearCompleted} tasks={this.state.toDo} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
