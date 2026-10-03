function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2>Contact</h2>
        <p className="contact-intro">
          Heb je een vraag, opdracht of wil je gewoon even sparren? Neem gerust contact op.
        </p>
        <div className="contact-links">
          <a href="mailto:kocakselim401@gmail.com" className="contact-item">
            <span className="contact-icon">📧</span>
            <span className="contact-label">E-mail</span>
            <span className="contact-value">kocakselim401@gmail.com</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-icon">💼</span>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">Verbind met mij</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-icon">🐙</span>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">Bekijk mijn projecten</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
