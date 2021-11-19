import React from 'react';
import './Products.css'
const Products = (props) => {
    const {name, img, price} = props.product;
    return (
        <div className="products-container">
            <img className="choco-img" src={img} alt='' />
            <div>
                <h3 className="name">{name}</h3>
                <p>Price: {price}</p>
                <button className="btn-choco" onClick={() => props.handleBuyChoco(props.product)}>Buy</button>
            </div>
        </div>
    );
};

export default Products;