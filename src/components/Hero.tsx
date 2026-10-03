import profielfoto from "../assets/sk.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="profile-photo">
          <img src={profielfoto} alt="Selim Kocak" />
        </div>
        <div className="hero-text">
          <h1>Selim Kocak</h1>
          <p className="tagline">Student open ict</p>

          <div className="hero-info">
            <span className="hero-info-item">21 jaar</span>
            <span className="hero-info-item">Utrecht</span>
            <span className="hero-info-item">HBO Open ICT</span>
          </div>

          <div className="hero-buttons">
            <a href="#certificaten" className="btn-primary">Bekijk mijn ervaring</a>
            <a href="#contact" className="btn-secondary">Neem contact op</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
