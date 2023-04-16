// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
var name = "akhil";
// const number = 7;
ReactDOM.render(
  <div>
    <h1>hello {name}! </h1>
    <span>your lucky number is {Math.random() * 10}</span>
  </div>,
  document.getElementById("root")
);
