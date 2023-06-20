import React from "react";
import landicon from "./landicon.jpg";
import "./landing.css";
import { useEffect } from "react";

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
            <img className="circleBtn" src={landicon} height={600} alt="Logo" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;
