import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
         Developed by{" "}
        <a target="_blank" href="https://github.com/sumitkspace/weatherapp_reactjs">
          SGU CSE Students
        </a>{" "}
        {/* | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a> */}
      </div>
    </React.Fragment>
  );
}

export default App;
