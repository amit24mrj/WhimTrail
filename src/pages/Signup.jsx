import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account Created!");
    navigate("/login");
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>

      <p onClick={() => navigate("/login")} style={{ marginTop: "10px", color: "blue", cursor: "pointer" }}>
        Already have an account? Login
      </p>
    </div>
  );
}

export default Signup;
