import react from 'react';
import './App.css';
import UsernameInput from './components/userNameInput.js';
import DisplayNationality from "./components/displayNationality.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Check Your Name's Likely Nationality</h1>
      </header>
        <div className="user-name">
          <UsernameInput />
        </div>
    </div>
  );
}

export default App;
