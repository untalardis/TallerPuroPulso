import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#111" }}>
      <Link 
        to="/" 
        style={{ color: "white", marginRight: "15px" }}
      >
        Inicio
      </Link>

      <Link 
        to="/about" 
        style={{ color: "white" }}
      >
        About
      </Link>
    </nav>
  );
}

export default Navbar;