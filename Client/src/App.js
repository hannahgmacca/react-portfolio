import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from "./components/nav.component.js"
import Landing from "./components/landing.component.js";
import Projects from "./components/projects.component.js";
import ScrollButton from "./components/scrollButton.component.js";
import BackgroundSVGs from "./components/backgroundSVGS.component.js";

function App() {
 return (
  <>
     <BackgroundSVGs/>
     <div className="app w-100">
     <Router>
      <NavComponent />
        <Routes>
        <Route path="/" exact element={<Landing/>} />
        <Route path="/projects" element={<Projects/>} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
        </Routes>
     </Router>
     <ScrollButton />
     </div>
  </>
   
 );
}
 
export default App;