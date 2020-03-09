import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
