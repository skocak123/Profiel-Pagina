import gymFoto from "../assets/strong-man-training-gym_1303-23478.avif";

function Interesses() {
  return (
    <section id="interesses" className="section section-alt">
      <div className="section-inner">
        <h2>Interesses</h2>
        <div className="about-inner">
          <div className="about-text">
            <p>Wat mij bezighoudt naast de studie.</p>
            <ul className="interests-list">
              <li>
                <span className="interest-icon">🏋️</span>
                <span className="interest-title">Krachttraining</span>
                <span className="interest-desc">Dagelijks in de sportschool, geeft mij discipline en focus die ik ook in mijn studie gebruik.</span>
              </li>
              <li>
                <span className="interest-icon">💻</span>
                <span className="interest-title">Programmeren als hobby</span>
                <span className="interest-desc">Naast schoolprojecten bouw ik in mijn vrije tijd kleine web- en API-projectjes.</span>
              </li>
              <li>
                <span className="interest-icon">🎮</span>
                <span className="interest-title">Gaming</span>
                <span className="interest-desc">Ontspannen met vrienden online, vooral competitieve games.</span>
              </li>
            </ul>
          </div>
          <div className="about-photo">
            <img src={gymFoto} alt="Selim aan het trainen in de sportschool" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interesses;
