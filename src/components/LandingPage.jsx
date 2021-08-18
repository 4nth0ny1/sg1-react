// import React from 'react';
import React, { Component } from 'react';
import CanVote from './CanVote';
import People from './People';
import Form from './Form';

const LandingPage = ({ age, name, location }) => {

    return (
        <div>
            <h1>hello, {name}, you are {age}, living in {location}</h1>
            <br></br>
          
            <CanVote 
                age={age}
                name={name}
            />

            <People />
            <Form />
    </div>
    );


};

export default LandingPage;