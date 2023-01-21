import React, { useState } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router';
import TShirts from '../TShirts/TShirts';
import Cart from '../Cart/Cart';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tShirt => {
        const exist = cart.find(ts => ts._id === tShirt._id);
        if(exist){
            alert("Sorry!!Already added, can't add one item more than one times");
        }else{
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }
    const removeCart = tShirt => {
        const remaining = cart.filter(ts => ts._id !== tShirt._id);
        setCart(remaining);
    }
    return (
        <div className='shop-container'>
            <div className='tshirt-container'>
                {
                    tShirts?.map(tShirt => <TShirts
                        key = {tShirt._id}
                        tShirt = {tShirt}
                        handleAddToCart = {handleAddToCart}
                    ></TShirts>)
                }
            </div>
            <div className='cart-container'>
                <Cart removeCart = {removeCart} cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Home;