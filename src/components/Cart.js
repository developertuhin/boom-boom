import React from 'react';

const Cart = (props) => {
    // console.log(props);
    return (
        <div>
            <h3>Player Details: </h3>
            <h1>Player Added : {props.addedPlayer}</h1>
            <h1>Name: </h1>
            <h2>Salary: {}</h2>
        </div>
    );
};

export default Cart;