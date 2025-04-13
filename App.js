import React, { useState } from "react";
import "./form.css";

export default function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [registeredPassword, setRegisteredPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsLoggedIn(false);
    setSuccessMsg("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (email === registeredEmail && password === registeredPassword) {
        setIsLoggedIn(true);
        setSuccessMsg("✅ Successfully Logged In!");
        setError("");
      } else {
        setError("❌ Invalid email or password!");
        setIsLoggedIn(false);
        setSuccessMsg("");
      }
    } else {
      // Save registration details
      setRegisteredEmail(email);
      setRegisteredPassword(password);
      setSuccessMsg("✅ Signed Up Successfully! Please login.");
      setIsLogin(true); // switch to login view
    }
  };

  return (
    <div className="form-card">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      {isLoggedIn && isLogin ? (
        <p className="success-msg">{successMsg}</p>
      ) : (
        <>
          {successMsg && <p className="success-msg">{successMsg}</p>}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label>👤 Username</label>
                <input type="text" required />
              </div>
            )}
            <div className="form-group">
              <label>📧 Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>🔒 Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button type="submit" className="submit-btn">
              {isLogin ? "Login 🚀" : "Sign Up 🎉"}
            </button>
          </form>
        </>
      )}

      {!isLoggedIn && (
        <p className="toggle-link" onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      )}
    </div>
  );
}
