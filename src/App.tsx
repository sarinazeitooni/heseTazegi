import React from "react";
import header from './images/header.png';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaqContent from "./components/Faq";
function App() {
  return (
    <div className="App">
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
