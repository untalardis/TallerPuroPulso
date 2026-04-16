import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      {/* Archive Section */}
      <section className="mc-section b-bottom">
        <h2 className="section-title b-bottom">ARCHIVO DE TALLERES</h2>
        <div className="accordion-list">
          <div className="accordion-item b-bottom">
            <span>01. TALLER DE SERIGRAFÍA BÁSICA</span>
            <span>+</span>
          </div>
          <div className="accordion-item b-bottom">
            <span>02. RISOGRAFÍA EXPERIMENTAL</span>
            <span>+</span>
          </div>
          <div className="accordion-item">
            <span>03. ENCUADERNACIÓN ARTESANAL</span>
            <span>+</span>
          </div>
        </div>
      </section>

      {/* Residents Section */}
      <section className="mc-section b-bottom">
        <h2 className="section-title b-bottom">ARTISTAS RESIDENTES</h2>
        <div className="residents-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`resident-card ${i % 3 !== 0 ? 'b-right' : ''} ${i < 4 ? 'b-bottom' : ''}`}>
              <div className="resident-img-placeholder"></div>
              <div className="resident-info b-top">
                <span>ARTISTA 0{i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop Section */}
      <section className="mc-section">
        <h2 className="section-title b-bottom">EDICIONES / TIENDA</h2>
        <div className="shop-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`shop-item ${i % 4 !== 0 ? 'b-right' : ''}`}>
              <div className="shop-img-placeholder">PRINT {i}</div>
              <div className="shop-details b-top">
                <span>T-SHIRT / FANZINE</span>
                <span>$25.000 COP</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainContent;
