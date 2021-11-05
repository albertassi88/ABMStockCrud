import React from "react";
import Home from "./pages/Home/index";
import CreateItems from "./pages/CreateItems/index";
import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<CreateItems />} />
        </Routes>    
      </BrowserRouter>
    </>
  );
}

export default App;
