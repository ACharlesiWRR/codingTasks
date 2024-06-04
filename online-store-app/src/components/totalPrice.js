import React from 'react';
import { useState , useEffect } from "react";

//Part 3
// create a component called TotalPrice.js and define <h2> tags that say "total price"
// when the buy button is clicked the total price componetn should be updated to display the total price of
// all purchased products 
// the total price component should be imported into every other component except the home component
// and displayed in the top right corner
// BUT it should only become visible after a user has clicked the buy button (not visible before action taken)
// 

export default function TotalPrice ({cartTotal, isPurchased}) {
    const [isVisible, setIsVisible] = useState(false); // component isn't visible
    // const [cartBasket, setCartBasket] 
    
        useEffect (() =>{
            if(isPurchased) {
                setIsVisible(true); // changes visibility
            }
        }, [isPurchased, cartTotal]);

        // handling number as a currency
        const currencyTotal = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(cartTotal);

    return isVisible ? (
        <h2 style={{position: "absolute", top:0, right: 0, margin: "10px"}}>
        Total Price: {currencyTotal}</h2>
    ) :null ;
//   setCartBacket();
}

