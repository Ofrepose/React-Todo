import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            task:""
        };
    }

    handleChanges = e =>{
        console.log(e.target.value);
        this.setState({
            task: e.target.value
        });
    }

    submitItem = e =>{
        e.preventDefault();
        this.props.addItem(e, this.state.task);

    }

    render(){
        return(
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    value={this.state.task}
                    name="item"
                    onChange={this.handleChanges}
                    />

                    <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;