import ervaringLogo from "../assets/images.jpg";

function Certificaten() {
  return (
    <section id="certificaten" className="section section-alt">
      <div className="section-inner">
        <h2>Certificaten & Ervaring</h2>
        <div className="split-inner">
          <div className="cards">
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>mbo 4 software development</h3>
              <p>Diploma behaald in 2026</p>
            </div>
            <div className="card">
              <div className="card-icon">💼</div>
              <h3>programmertalen</h3>
              <p>PHP/SYMFONY/JS/REACT</p>
            </div>
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3>REST API</h3>
              <p>Eigen REST API gebouwd met Symfony, inclusief CRUD-endpoints en authenticatie</p>
            </div>
             <div className="card">
              <div className="card-icon">🎭</div>
              <h3>900 uur stage</h3>
              <p>bij get interactive</p>
            </div>
          </div>
          <div className="about-photo about-photo-logo">
            <img src={ervaringLogo} alt="Ervaring Vertelt logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificaten;
