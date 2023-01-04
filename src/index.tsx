import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style/index.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
