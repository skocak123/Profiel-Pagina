type NavbarProps = {
  theme: string;
  setTheme: (theme: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

function Navbar({ theme, setTheme, menuOpen, setMenuOpen }: NavbarProps) {
  return (
    <nav>
      <span className="nav-logo">SK</span>

      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Wissel tussen donker en licht thema"
      >
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </button>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#opleiding" onClick={() => setMenuOpen(false)}>Opleiding</a>
        <a href="#vaardigheden" onClick={() => setMenuOpen(false)}>Vaardigheden</a>
        <a href="#interesses" onClick={() => setMenuOpen(false)}>Interesses</a>
        <a href="#certificaten" onClick={() => setMenuOpen(false)}>Certificaten</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
