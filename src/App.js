import React from "react";
import Home from "./pages/Home/index";
import CreateItems from "./pages/CreateItems/index";
import ListItems from "./pages/ListItems/index";
import DetailsItem from "./pages/DetailsItem";
import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-items" element={<CreateItems />} />
          <Route path="/list-items" element={<ListItems />} />
          <Route path="/details-items" element={<DetailsItem />} />
        </Routes>    
      </BrowserRouter>
    </>
  );
}

export default App;
