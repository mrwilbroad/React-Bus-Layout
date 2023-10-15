import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReactBusLayout from "./ReactBusLayout";

// css
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("planner"));
root.render(
  <React.StrictMode>
    <ReactBusLayout />
  </React.StrictMode>
);
