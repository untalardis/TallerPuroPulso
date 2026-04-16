import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar b-bottom">
      <div className="nav-left b-right">
        <Link to="/" className="nav-logo">PURO PULSO</Link>
      </div>
      
      <div className="nav-center b-right">
        <span className="live-indicator">
          <span className="dot blinking"></span>
          EN TALLER
        </span>
      </div>

      <div className="nav-right">
        <button className="btn-donate">CONTACTO</button>
      </div>
    </nav>
  );
}

export default Navbar;