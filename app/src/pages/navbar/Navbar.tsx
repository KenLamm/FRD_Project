// import React from "react";
// import logo from "../../logo.jpeg";
// import name from "../../companyName.jpg";
// import BackButton from "../../features/navbar/Navbar";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   // const goBack = () => {
//   //   navigate(-1); // Navigate back to the previous page
//   // };
//   return (
//     <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
//       {/* 左側圖片 */}
//       <div style={{ marginRight: "auto" }}>
//         <img
//           src={logo}
//           alt="Left Image"
//           style={{ width: "50px", height: "50px" }}
//         />
//       </div>

//       {/* 中間圖片 */}
//       <div style={{ margin: "0 auto" }}>
//         <img
//           src={name}
//           alt="Center Image"
//           style={{ width: "100px", height: "100px" }}
//         />
//       </div>

//       {/* 右側圖標 */}
//       <div style={{ marginLeft: "auto" }}>
//         <button onClick={() => navigate(-1)}>Go Back</button>
//         <span style={{ marginLeft: "10px", fontSize: "18px" }}>Icon</span>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { createStyles, Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
