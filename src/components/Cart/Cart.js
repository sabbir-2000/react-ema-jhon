import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props.children);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 10 / 100).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}
                <p> Price: ${total}</p></p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;