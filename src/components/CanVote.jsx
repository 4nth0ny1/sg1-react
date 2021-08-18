import React from 'react';

const CanVote = ({ age, name }) => {
    if (age > 18) {
        return name + ', sure can!'
    } else {
        return 'live a little more'
    }
}

export default CanVote;