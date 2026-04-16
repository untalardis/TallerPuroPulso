import './Hero.css';

function Hero() {
  return (
    <section className="hero-section b-bottom">
      <div className="hero-left b-right">
        <h1 className="hero-title">TALLER<br/>PURO<br/>PULSO</h1>
      </div>
      <div className="hero-right">
        <div className="video-placeholder">
          <div className="visualizer">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <p className="placeholder-text">IMPRESIÓN ANÁLOGA Y ARTE</p>
        </div>
        <div className="newsletter b-top">
          <p className="nl-title">ENTÉRATE DE NUEVOS TALLERES</p>
          <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="TU E-MAIL" className="nl-input b-right" />
            <button type="submit" className="nl-btn">SUSCRIBIR</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
