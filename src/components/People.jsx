import React, { Component } from 'react';

class People extends Component {
    constructor(){
        super()
        this.state = {
            people: ['jim', 'laura', 'bob'],
            hasPets: true, 
            totalAge: 100,
            cars: {
                jim: ["yaris", "camry"],
                laura: ["bus pass"],
                bob: ["mustang", 'chevelle']
            },
        };
    }

    render(){
        return <div>People: {this.state.people}</div>
    }
}


export default People;