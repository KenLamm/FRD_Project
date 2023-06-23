import React from "react";
import landingicon from "./landingicon.jpg";
import "./landing.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
     navigate("/login")
    }, 2000);

    return () => clearTimeout(timer); // 在组件卸载时清除定时器
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>TECKY ENGINEERING COMPANY</div> */}
        <div className="center">
          <div>
            <img
              className="circleBtn"
              src={landingicon}
              height={600}
              alt="Logo"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;
