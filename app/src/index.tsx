<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./pages/app/App";
import reportWebVitals from "./reportWebVitals";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
>>>>>>> 3dd256bbab833ae5ca67d35fc9f780e27e2c8a68

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
