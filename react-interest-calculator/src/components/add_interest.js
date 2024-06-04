import React from "react";
import { Button } from "react-bootstrap";

// 4. <button> that adds a % interest to CURRENT_BALANCE

export default function AddInterest({ onAddInterest }) {

    return (
    <div className="interest">
      <div>
        <p>Add 5% Interest</p>
        <Button className="button" variant="warning" onClick={onAddInterest}>
          Add
        </Button>
      </div>
    </div>
  );
}



    // const handleInterest = (event) => {
    //   event.preventDefault();
    //   const interestAmount = balance * 0.05;
    //   console.log(balance);
    //   onAddInterest(balance + interestAmount);
    //   console.log(interestAmount);
    // };