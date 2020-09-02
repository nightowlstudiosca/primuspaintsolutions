import React from 'react';
// import logo from './logo-cropped.png';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
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
        <a href="mailto:amal@primuspaintsolutions.ca">amal@primuspaintsolutions.ca</a> 
        <h2>
          Contact Number
        </h2>
        <a href="tel:7808845848">780-884-5848</a>
        {/* <p>
          Please email us at <a href="mailto:amal@primuspaint.ca">amal@primuspaint.ca</a>, or contact us at <a href="tel:7808845848">780-884-5848</a>.
        </p> */}
      </section>
    </div>
  );
}

export default App;
