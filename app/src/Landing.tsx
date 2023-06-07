import React from "react";
import logo from "./logo.jpeg";
import "./App.css";
import Camera from "./features/camera/camera";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/home"); // 在3秒后导航到'/home'页面
    }, 3000);

    return () => clearTimeout(timer); // 在组件卸载时清除定时器
  }, [history]);
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
};

export default Landing;
