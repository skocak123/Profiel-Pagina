import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Opleiding from "./components/Opleiding";
import Interesses from "./components/Interesses";
import Vaardigheden from "./components/Vaardigheden";
import Certificaten from "./components/Certificaten";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="page">
      <Navbar theme={theme} setTheme={setTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Opleiding />
      <Interesses />
      <Vaardigheden />
      <Certificaten />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
