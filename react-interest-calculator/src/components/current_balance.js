import React from "react";

// 1. using setState to show current balance - CURRENT_BALANCE Component

export default function CurrentBalance ({balance}) {
    return (
      <div>
        <h2>Balance: £{balance}</h2>  
      </div>
    );
}
