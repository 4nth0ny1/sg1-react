import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: '', 
            age: '', 
            hasJob: false
        }
    }

    myChangeHandler = (e) => {
        const { name, value } = e.target;
        
        if (e.target.type !== 'checkbox'){
            this.setState({
                [name]: value,
            });
        } else {
            this.setState({
                [name]: e.target.checked,
            });
        }
    };

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render(){
        return(
            <div>
                <form>
                    <h1>My Form</h1>
                    <input 
                        type='text'
                        onChange={this.myChangeHandler}
                        name="name"
                        value={this.state.name}
                    />
                    <input 
                        type='text'
                        onChange={this.myChangeHandler}
                        name="age"
                        value={this.state.age}
                    />
                    <input 
                        type="checkbox"
                        value={this.state.hasJob}
                        onChange={this.myChangeHandler}
                        name="hasJob" 
                    /> 
                    <label>Has Job?</label>
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        )
    }


}

export default Form;