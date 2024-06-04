import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container } from 'react-bootstrap';
// import CurrentBalance from "./components/current_balance.js";
import BalanceController from "./components/balance_controller.js"; 


//psuedocode
// 1. using setState to show current balance - CURRENT_BALANCE Component
// 2. <input> and <button> with event listeners with a function to update the CURRENT_BALANCE - DEPOSIT component
// 3. same as 2 - WITHDRAW_BALANCE Component
// 4. <button> that adds a % interest to CURRENT_BALANCE
// 5. same as 4 that adds a fixed about to the CURRENT_BALANCE
// 6. state shared across 2 separate components
// 7. bootstrap components for button, form/$ input group for inputs?, loading spinner?,

function App() {
  return (
    <div className="App">
      <div className="PhoneScreen">
          <h1>My Banking App</h1>
          <BalanceController />
      </div>
    </div>
  );
}

export default App;
