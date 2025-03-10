import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-primary min-h-screen text-textLight">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;