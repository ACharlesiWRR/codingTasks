import React from "react";
import { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import FetchNationality from "./fetchNationality.js";

// parent component for the main input area and handling state variables

export default function UsernameInput() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [showNationality, setShowNationality] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // focuses on firstname field
  }, []);

  useEffect(() => {
    setUsername(firstName + surname); // update username when they change
  }, [firstName, surname]); // runs when updated

// event hanlders on name changes
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value); 
  }

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  }

  // hanlde checking nationality 
  const handleCheckNationality = () => {
    setShowNationality(true);
  }

  return (
    <div>
      <Form className="form-input">
        <Form.Group controlId="firstNameInput">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            ref={inputRef}
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Your first name"
          />
        </Form.Group>
        <Form.Group controlId="surnameInput">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            value={surname}
            onChange={handleSurnameChange}
            placeholder="Your surname"
          />
        </Form.Group>
        <Button
          className="button"
          variant="outline-light"
          onClick={handleCheckNationality}
        >
          Check nationality
        </Button>
      </Form>
      {showNationality && <FetchNationality firstName={firstName} surname={surname} />}
      <p>Your name is: {firstName + " " + surname}</p>
    </div>
  );
}
