import React from "react";
import logo from "../../logo.jpeg";
import name from "../../companyName.jpg";

import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1); // Navigate back to the previous page
  // };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#202020",
        height: "3vh",
      }}
    >
      {/* 左側圖片 */}
      <div style={{ marginRight: "auto", color: "#101010" }}>
        <span></span>
      </div>

      {/* 中間圖片 */}
      <div style={{ margin: "0 auto" }}>
        <img
          src={logo}
          alt="Center Image"
          style={{ width: "40px", height: "40px" }}
        />
      </div>

      {/* 右側圖標 */}
      <div style={{ marginLeft: "auto" }}>
        {/* <button onClick={() => navigate(-1)}>Go Back</button>
        <span style={{ marginLeft: "10px", fontSize: "18px" }}>Icon</span> */}
      </div>
    </div>
  );
};

export default TopNavbar;
