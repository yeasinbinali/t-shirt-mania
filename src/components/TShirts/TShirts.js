import React from 'react';
import './TShirts.css';

const TShirts = ({tShirt, handleAddToCart}) => {
    const {name, price, picture} = tShirt;
    return (
        <div className='tshirt'>
            <img className='image' src={picture} alt=''></img>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add to cart</button>
        </div>
    );
};

export default TShirts;