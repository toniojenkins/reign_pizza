import React from 'react';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
    return (
        <div className="pizzaList_container">
            <h1 className="pizzaList_title">THE BEST PIZZA IN VEGAS</h1>
            <p className="pizzaList_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti quasi vero beatae commodi ipsum eum similique
                voluptates dolore, accusantium suscipit.
            </p>
            <div className="pizzaList_wrapper">
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    );
};

export default PizzaList;
