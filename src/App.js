import React from 'react';
import logo from './logo.svg';
import './App.css';

var p={
 Name: "Abbas Ali",
 Job:"On line markating",
 village:" choto Bahirbag",
 thana : "Kashiani , Gopal jong"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done my first  <code>src/App.js</code> and save to reload.
        </p>
     <p>my first react</p> 
  <h2>{p.Job+" "+ p.Name+" "+p.village+" "+p.thana }</h2>
      </header>
    </div>
  );
}

export default App;
