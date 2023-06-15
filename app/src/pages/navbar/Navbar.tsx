import React from "react";
import logo from "../../logo.jpeg";
import name from "../../companyName.jpg";

const Navbar = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
      {/* 左側圖片 */}
      <div style={{ marginRight: "auto" }}>
        <img
          src={logo}
          alt="Left Image"
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      {/* 中間圖片 */}
      <div style={{ margin: "0 auto" }}>
        <img
          src={name}
          alt="Center Image"
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      {/* 右側圖標 */}
      <div style={{ marginLeft: "auto" }}>
        <img
          src="right-image.png"
          alt="Right Image"
          style={{ width: "30px", height: "30px" }}
        />
        <span style={{ marginLeft: "10px", fontSize: "18px" }}>Icon</span>
      </div>
    </div>
  );
};

export default Navbar;
