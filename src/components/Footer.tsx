function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="nav-logo">SK</span>
          <p>Student Open ICT, gemaakt in Utrecht. Altijd in voor een uitdaging.</p>
        </div>

        <div className="footer-col">
          <h4>Navigatie</h4>
          <a href="#home">Home</a>
          <a href="#opleiding">Opleiding</a>
          <a href="#vaardigheden">Vaardigheden</a>
          <a href="#interesses">Interesses</a>
          <a href="#certificaten">Certificaten</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:kocakselim401@gmail.com">kocakselim401@gmail.com</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Selim Kocak</p>
      </div>
    </footer>
  );
}

export default Footer;
