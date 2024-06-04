import React from "react";
import { useState } from "react";
import { Button , Form } from "react-bootstrap";

// 3. same as 2 - WITHDRAW_BALANCE Component
// not sure how to handle decimals in here

export default function WithdrawMoney({onWithdraw}) {
  const [inputValue, setInputValue] = useState(''); // State to keep track of the input value

  const handleMoneyChange = (event) => {
    setInputValue(parseInt(event.target.value) || 0); // handle money change value
  };

  const handleWithdrawal = () => {
    onWithdraw(inputValue);
    setInputValue(''); // reset val
  };

  return (
    <div className="withdrawal">
      <Form>
        <Form.Group controlId="withdrawMoneyInput">
          <Form.Label>Withdraw Money</Form.Label>
          <Form.Control
            type="number"
            value={inputValue}
            onChange={handleMoneyChange}
            placeholder="Enter amount"
          />
        </Form.Group>
        <Button className = "button" variant="danger" onClick={handleWithdrawal}>
          Withdraw
        </Button>
      </Form>
    </div>
  );
}
