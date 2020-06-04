// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from "./TodoForm";

const TodoList = props =>{
    return(
        <div>

            <TodoForm addItem={props.addItem} />
        {props.tasks.map(item=>{
            return(
                <>
            <Todo key={item.id} task={item} toggleTask={props.toggleTask} />
            </>
            )
            })}

            <button onClick={props.clearCompleted}>Clear Completed</button>

        </div>
    )

}

export default TodoList;