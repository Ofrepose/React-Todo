import React from 'react';

const Todo = props =>{
    return(
        <div>
            <p onClick={()=>props.toggleTask(props.task.id)}
            className={`task-${props.task.completed ? "completed":""}`}
            >{props.task.task}</p>
        </div>
    )
};

export default Todo;