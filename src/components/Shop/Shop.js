import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useState([])


    useEffect(() => {
        console.log('local storage first line', products);
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
        // console.log('local sotrage finished');
    }, [products])

    const handleAddToClick = (product) => {
        // console.log(product);
        // cart.push(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
        newCart = [...cart, product]
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToClick={handleAddToClick}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='oder-details-cart'>
                    <Cart cart={cart}>
                        <Link to='/orders'>
                            <button>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;