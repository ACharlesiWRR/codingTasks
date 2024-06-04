import React from "react";
import { useState } from "react";
import { Button , Form } from 'react-bootstrap';

// 2. <input> and <button> with event listeners with a function to update the CURRENT_BALANCE - DEPOSIT component
// not sure how to handle decimals in here

export default function AddMoney({onAdd}) {
  const [inputValue, setInputValue] = useState(''); // State to keep track of the input value

    const handleMoneyChange = (event) => { 
      setInputValue(parseInt(event.target.value) || 0); // handle money change value
    };

    const handleDeposit = () => {
        onAdd(inputValue);
        setInputValue(""); // resets value after submission
    };

    return (
      <div className="deposit">
        <Form>
          <Form.Group controlId="addMoneyInput">
            <Form.Label>Deposit Money</Form.Label>
            <Form.Control
              type="number"
              value={inputValue}
              onChange={handleMoneyChange}
              placeholder="Enter amount"
            />
          </Form.Group>
          <Button className="button" variant="success" onClick={handleDeposit}>
            Add
          </Button>
        </Form>
      </div>
    );

}
