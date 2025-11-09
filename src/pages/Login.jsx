import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Temporary auth check
    if (email === "admin@gmail.com" && pass === "1234") {
        localStorage.setItem("auth", "true");
        navigate("/dashboard");
    } else {
        alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.box}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required />
        <button type="submit">Login</button>
      </form>

      <p onClick={() => navigate("/signup")} style={styles.link}>Create Account</p>
    </div>
  );
}

const styles = {
  box: { width: "300", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  link: { marginTop: "10px", cursor: "pointer", color: "blue" }
};

export default Login;
