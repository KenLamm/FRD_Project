import React from "react";
import logo from "./logo.jpeg";
import "./App.css";
import Camera from "./features/camera/camera";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/login";
    }, 3000);

    return () => clearTimeout(timer); // 在组件卸载时清除定时器
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>TECKY ENGINEERING COMPANY</div> */}
        <div className="center">
          <div>
            <img className="circle" src={logo} height={600} alt="Logo" />
            {/* <Link to="/login">Click here if not redirected</Link> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;
