import React from 'react';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;

    const total = cart.reduce((total,player) => total + player.salary , 0)
    return (
        <div>
            <h1 style={{color:'green'}}>Player Details </h1>
            <h2>Player Added : {props.cart.length}</h2>
             <h3 style={{color:'salmon'}}>Expense : {total} TK</h3>
            {
                cart.map((c)=> {
                    return ( 
                        <div>
                            <h3>Name: {c.name}</h3>
                            <p>Salary: {c.salary} TK</p>
                            
                        </div>
                     )
                            

                })
            }
           
            
        </div>
    );
};

export default Cart;