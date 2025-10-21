import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "../src/pages/Contact";
import Experience from "../src/pages/Experience";
import Projects from "../src/pages/Projects";
import Ida from "../src/pages/Ida";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ida />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
