import React from 'react';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;
    return (
        <div>
            <h1 style={{color:'red'}}>Player Details </h1>
            <h2>Player Added : {props.cart.length}</h2>
            {
                cart.map((c)=> {
                    return ( 
                        <div>
                            <h3>Name: {c.name}</h3>
                            <p>Salary: {c.salary}</p>
                        </div>
                     )
                            

                })
            }
           
            
        </div>
    );
};

export default Cart;