import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./pages/app/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div
    style={{
      margin: "0",
      backgroundColor: "#454545",
      backgroundSize: "cover",
      borderWidth: "10px",
      borderColor: "red",
      paddingBottom: "20%",
    }}
    className="base"
  >
    {/* <Navbar /> */}
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
