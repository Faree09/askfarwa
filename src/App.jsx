import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Bio from './pages/Bio';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
