import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Comp/Header/Header';
import Shop from './Comp/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mama react kintu install kore felsi so no tension
          colo eibar ekta component banai loi 
        </p>
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}





export default App;
