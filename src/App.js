import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
=======
// import logo from './logo-cropped.png';
import logo from './logo.png';
>>>>>>> a066b41... Updated homepage
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
=======
      <header>
        <img src={logo} className="logo" alt="Primus Paint Solutions" />
      </header>
      <section>
        <h1>
          Coming Soon
        </h1>
        <h2>
          Email
        </h2>
        <a href="mailto:amal@primuspaint.ca">amal@primuspaint.ca</a> 
        <h2>
          Contact Number
        </h2>
        <a href="tel:7808845848">780-884-5848</a>
        {/* <p>
          Please email us at <a href="mailto:amal@primuspaint.ca">amal@primuspaint.ca</a>, or contact us at <a href="tel:7808845848">780-884-5848</a>.
        </p> */}
      </section>
>>>>>>> a066b41... Updated homepage
    </div>
  );
}

export default App;
