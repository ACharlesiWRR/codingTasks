import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react'; 
import NavigationBar from '../components/nav';

export default function HomeLogin () {
    const [name, setName] = useState(""); // State to keep track of the input value
    const [isLoggedIn, setIsLoggedIn] = useState(false); // tracking login state
    const [loggedInName, setLoggedInName] = useState(""); // state to store logged in name

    const handleNameChange = (event) => {
    setName(event.target.value); // handle login event value
    };


    const handleLogIn = () => {
        if (name.trim()) { // check if it's empty, if not it's true
            setIsLoggedIn(true); 
            setLoggedInName(name); // store the name before reset
            setName("");
        } else {
            // warning message if login failed
            alert(`Login failed! Please try again`);
        }
    };

    const handleLogOut = () => {
        setIsLoggedIn(false); //reset the login state
        setLoggedInName(""); // reset the stored name
    };

    return (
      <div>
        <NavigationBar isLoggedIn={isLoggedIn} onLogout={handleLogOut} loggedInName={loggedInName} />
            {isLoggedIn ? (
                <>
                <h1>Welcome to our app, {loggedInName}</h1>
                <Button onClick={handleLogOut} variant="danger">Logout</Button>
                 </>
            ) : ( 
        <div className="login">
          <h1 className="form-label">
            Good to see you. <br /> Enter your name to login
          </h1>
          <Form>
            <Form.Group controlId="login-form">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Button
              className="login-button"
              variant="success"
              onClick={handleLogIn}
            >
              Login
            </Button>
          </Form>
        </div>
         )}
      </div>
    );
}