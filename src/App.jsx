import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Contact from "./Components/Sections/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
