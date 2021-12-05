import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// @ts-ignore
window.Blazor.start().then((_) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
