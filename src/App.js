import React from "react";
import Button from "./components/Button";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div classname="container">
        <div className="row">
          <div className="col">
            <Button />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>

          <div className="col">
            <Jumbotron />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
