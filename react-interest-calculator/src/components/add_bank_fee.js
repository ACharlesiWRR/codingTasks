import React from "react";
import { Button } from "react-bootstrap";

// 5. same as 4 that adds a fixed bank fee to the CURRENT_BALANCE

export default function AddBankFee({ onAddBankFee }) {
  return (
    <div className="interest">
      <div>
        <p>Subtract Bank Monthly Fee</p>
        <Button className="button" variant="info" onClick={onAddBankFee}>
          Add
        </Button>
      </div>
    </div>
  );
}
