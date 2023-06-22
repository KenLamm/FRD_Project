import React from "react";
import "./Navbar.css"; // 導入自定義的CSS樣式
import { FaAngleLeft } from "react-icons/fa";
import { BsInfoSquare } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { redirect, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const goBack = () => {
    // const isLoggedIn = localStorage.getItem("id");
    // const isLoginPage = location.pathname === "/login";
    navigate(-1);
    // if (isLoginPage) {
    //   navigate("/project");
    // } else {
    //   navigate(-1);
    // }
  };

  return (
    <div className="navbar">
      <button className="btn" onClick={goBack}>
        <i className="icon">
          <FaAngleLeft />
        </i>
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate("/project");
        }}
      >
        <i className="icon">
          <RxHome />
        </i>
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate("/rules");
        }}
      >
        <i className="icon">
          <BsInfoSquare />
        </i>
      </button>
      {/* <div className="effect"></div> */}
    </div>
  );
}

export default Navbar;
