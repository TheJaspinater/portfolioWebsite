import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Background from "./components/Background.js";
import Home from "./Pages/Home.js";
import Resume from "./Pages/Resume.js";
import Contact from "./Pages/Contact.js";

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Background/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;