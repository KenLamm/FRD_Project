import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../../features/navbar/Navbar";
// import "./index.css"; // 引入全局的 CSS 樣式表

const Bar = () => {
  return (
    <div>
      <Navbar />
      {/* 其他應用程序內容 */}
    </div>
  );
};

ReactDOM.render(<Bar />, document.getElementById("root"));

export default Bar;
