import React from "react";
import logo from "./logo.jpeg";
import "./App.css";
import Camera from "./features/camera/camera";

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <div>TECKY ENGINEERING COMPANY</div>
        <div className="center">
          <div>
            <img className="circle" src={logo} height={600} alt="Logo" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Landing;