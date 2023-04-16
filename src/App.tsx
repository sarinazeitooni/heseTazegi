import React from "react";
import "./globals.css";
import header from "./images/header.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaqContent from "./components/Faq";
import styles from "./app.module.scss";
function App() {
  return (
    <div className={styles["app"]}>
      <img src={header} alt="logo" />
      <BrowserRouter>
        <Routes>
          <Route path="FAQ" element={<FaqContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
