import Image from 'next/image';
import React from 'react';
const PizzaCard = () => {
    return (
        <div className="pizzaCard_container">
            <Image src="/img/pizza.png" alt="" height="500px" width="500px" />
            <h1 className="pizzaCard_title">FIORI DI ZUCCA</h1>
            <span className="pizzaCard_price">$19.99</span>
            <p className="pizzaCard_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
        </div>
    );
};

export default PizzaCard;
