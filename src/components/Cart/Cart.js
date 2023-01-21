import React from 'react';
import './Cart.css';

const Cart = ({cart, removeCart}) => {
    let element;
    if(cart.length === 0){
        element = <h3>Buy now, Please!</h3>
    }else if(cart.length === 7){
        element = <h3 style={{color: 'red'}}>Can't add</h3>
    }
    
    return (
        <div className='cart'>
            <h2 className='review-header'>Orders Review</h2>
            <div> 
                {
                    cart.map(singleTshirt => <div className='order-cart'>
                        <img className='cart-img' src={singleTshirt.picture} alt=''></img>
                        <h4>{singleTshirt.name}</h4>
                        <button onClick={() => removeCart(singleTshirt)}>X</button>
                    </div>
                    )
                }
                
                {element}
            </div>
        </div>
    );
};

export default Cart;