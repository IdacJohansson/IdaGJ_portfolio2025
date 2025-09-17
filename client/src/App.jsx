import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Experience from "../src/pages/Experience";
import Projects from "../src/pages/Projects";

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
