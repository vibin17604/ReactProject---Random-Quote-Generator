import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    
   
  );
}

export default App;