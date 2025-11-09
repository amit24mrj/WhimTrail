import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>WhimTrail</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/trips" style={styles.link}>Trips</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/login" style={styles.button}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: "flex", justifyContent: "space-between", padding: "12px 30px", background: "#111", color: "#fff" },
  logo: { fontSize: "22px", fontWeight: "bold" },
  links: { display: "flex", gap: "20px", alignItems: "center" },
  link: { textDecoration: "none", color: "#fff", fontSize: "16px" },
  button: { padding: "6px 14px", background: "#ff8300", color: "#fff", borderRadius: "6px", textDecoration: "none" }
};

export default Navbar;
