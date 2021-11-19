import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    // looping through cart 
    for( const product of cart){
        total = total + product.price;
    }
    console.log(props.cart)
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Total Item: {cart.length}</p>
            <p>Price : {total}</p>
        </div>
    );
};

export default Cart;