import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviewIteam/ReviewIteam';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useCart(products)
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewIteam key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewIteam>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/shipment'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;